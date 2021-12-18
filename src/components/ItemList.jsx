import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Axios from "axios";
import Item from "./Item";
import ItemForm from "./ItemForm";

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
  const addItem = (item) => {
    Axios.post("https://nutech-api.herokuapp.com/item/create", item);

    const newItems = [item, ...items];
    setItems(newItems);
  };

  return (
    <Container>
      <Row>
        <Item items={items} />
      </Row>
      <ItemForm onSubmit={addItem} show={props.show} hide={props.hide} />
    </Container>
  );
}
