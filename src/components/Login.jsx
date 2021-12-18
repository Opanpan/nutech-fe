import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { login } from "../utils";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = (data) => {
    // http://localhost:8000
    // https://nutech-api.herokuapp.com
    Axios.post("https://nutech-api.herokuapp.com/auth/login", data)
      .then((res) => {
        login(res.data);
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
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
                  Password harus terdiri dari 6 karakter{" "}
                </p>
              )}
            </Form.Group>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button
                  className="btn-custom"
                  bsPrefix="super-btn"
                  type="submit"
                >
                  Login
                </Button>
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
