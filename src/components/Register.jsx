import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import Axios from "axios";
import UseAnimations from "react-useanimations";
import Loading from "react-useanimations/lib/loading";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const [responseMessage, setResponseMessage] = useState("");
  const [responseRegister, setResponseRegister] = useState("");

  const [isRegister, setIsRegister] = useState(false);

  const onSubmit = (data) => {
    // http://localhost:8000
    // https://nutech-api.herokuapp.com
    setIsRegister(true);
    Axios.post("https://nutech-api.herokuapp.com/auth/register", data)
      .then((res) => {
        setIsRegister(false);
        setValue("username", "");
        setValue("password", "");
        setShow(true);
        setResponseRegister(res.data);
      })
      .catch((error) => {
        setResponseMessage(error.response.data);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col
          style={{ marginTop: "30%" }}
          className="d-flex justify-content-center"
        >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{responseRegister}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank you, registering :3</Modal.Body>
          </Modal>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="formBox">
              <Form.Control
                id="username"
                type="text"
                placeholder="Username"
                className="formInput"
                {...register("username", {
                  required: true,
                })}
              />
              {errors.username?.type === "required" && (
                <p className="error-font">Username tidak boleh kosong !</p>
              )}
            </Form.Group>
            <Form.Group className="formBox">
              <Form.Control
                type="password"
                placeholder="Password"
                className="formInput"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="error-font">Password tidak boleh kosong !</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="error-font">
                  Password harus terdiri dari 6 karakter !
                </p>
              )}
            </Form.Group>
            <Row>
              <Col className="d-flex justify-content-center">
                {isRegister ? (
                  <UseAnimations animation={Loading} size={50} />
                ) : (
                  <Button
                    className="btn-custom"
                    bsPrefix="super-btn"
                    type="submit"
                  >
                    Register
                  </Button>
                )}
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <p className="error-font">{responseMessage}</p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
