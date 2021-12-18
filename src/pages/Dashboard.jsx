import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { logout } from "../utils";
import ItemList from "../components/ItemList";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const [addItem, setAddItem] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const handleLogout = () => {
    console.log("logout");
    logout();
    navigate("/");
  };

  // Start Modal Form

  const handleAddItem = () => {
    setAddItem(true);
  };

  const handleCloseAddItem = (data) => {
    setAddItem(data);
  };

  // End Modal Form

  return (
    <Container fluid>
      <Row className="custom-header d-flex align-items-center d-flex justify-content-between">
        <Col className="col-auto">
          <Form>
            <Form.Group className="form-search" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Search" />
            </Form.Group>
          </Form>
        </Col>
        <Col className="col-auto">
          <Button
            bsPrefix="super-btn"
            className="btn-add-item"
            onClick={handleAddItem}
          >
            Add Item
          </Button>
        </Col>
        <Col className="col-auto"></Col>
        <Col className="col-auto">
          <Row>
            <Col className="col-auto">
              {" "}
              <h3>
                <span style={{ fontWeight: "300" }}>Hello,</span>{" "}
                <span style={{ fontWeight: "600" }}>{user}</span>
              </h3>
            </Col>
            <Col className="col-auto">
              <Button
                bsPrefix="super-btn"
                className="btn-logout"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row d-flex justify-content-center>
        <ItemList show={addItem} hide={handleCloseAddItem} />
      </Row>
    </Container>
  );
}
