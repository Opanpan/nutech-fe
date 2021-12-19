import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Notification(props) {
  const handleClose = () => {
    props.hide(false);
  };

  return (
    <>
      <Modal show={props.isNotif} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.notifMessage}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.suggestMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
