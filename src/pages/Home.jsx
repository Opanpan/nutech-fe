import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <div className="HomeLeft">
            <h1>Manage Stuff</h1>
            <h3>Manage your stuff easly with our app</h3>
            <Row>
              <Col>
                <Button
                  className="btn-custom btn-register"
                  bsPrefix="super-btn"
                  onClick={() => setIsLogin(false)}
                >
                  <div>
                    <h3>Register</h3>
                    <h4>if you don’t have account</h4>
                  </div>
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn-custom btn-login"
                  bsPrefix="super-btn"
                  onClick={() => setIsLogin(true)}
                >
                  <div>
                    <h3>Login</h3>
                    <h4>if you already register</h4>
                  </div>
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="p-0">
          <div className="HomeRight">{isLogin ? <Login /> : <Register />}</div>
        </Col>
      </Row>
    </Container>
  );
}
