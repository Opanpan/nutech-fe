import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Axios from "axios";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Notification from "./Notification";

export default function ItemList(props) {
  const [items, setItems] = useState([]);

  // GET DATA FROM DATABASE
  useEffect(() => {
    Axios.get("https://nutech-api.herokuapp.com/item", {
      params: {
        user_id: localStorage.getItem("id"),
      },
    })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // HANDLE ADD ITEM
  const [isNotif, setIsNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState("");
  const [suggestMessage, setSuggestMessage] = useState("");

  const handleCloseNotif = (data) => {
    setIsNotif(data);
  };

  const addItem = (item) => {
    if ([...items].filter((oldItem) => oldItem.name === item.name)) {
      setIsNotif(true);
      setNotifMessage("Nama barang sudah ada");
      setSuggestMessage("Mohon gunakan nama lain");

      return;
    }

    Axios.post("https://nutech-api.herokuapp.com/item/create", item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));

    const newItems = [item, ...items];
    setItems(newItems);
  };

  // HANDLE REMOVE ITEM
  const removeItem = async (name) => {
    const data = {
      name,
      user_id: localStorage.getItem("id"),
    };

    const removedItem = [...items].filter((item) => item.name !== data.name);
    setItems(removedItem);

    await Axios.post("https://nutech-api.herokuapp.com/item/delete", data);
  };

  return (
    <Container>
      <Row>
        <Item items={items} removeItem={removeItem} />
      </Row>
      <Notification
        isNotif={isNotif}
        hide={handleCloseNotif}
        notifMessage={notifMessage}
        suggestMessage={suggestMessage}
      />
      <ItemForm onSubmit={addItem} show={props.show} hide={props.hide} />
    </Container>
  );
}
