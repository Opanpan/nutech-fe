import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import Edit from "react-useanimations/lib/edit";
import Delete from "react-useanimations/lib/trash";

const Item = ({ items, removeItem }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return items.map((item, index) => {
    return (
      <Col key={index}>
        <div className="item-container d-flex align-items-center justify-content-around mt-5">
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Caution !!!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {`Apakah anda yakin ingin menghapus item ${item.name} ?`}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  No
                </Button>
                <Button variant="success" onClick={() => removeItem(item.name)}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="item-image"></div>
          <div className="item-font">
            <h4 className="item-title">Nama</h4>
            {item.name}
          </div>
          <div className="item-font">
            <h4 className="item-title">Harga Beli</h4>
            Rp {item.purchase_price}
          </div>
          <div className="item-font">
            <h4 className="item-title">Harga Jual</h4>
            Rp {item.selling_price}
          </div>
          <div className="item-font">
            <h4 className="item-title">Stok</h4>
            {item.quantity} / Pcs
          </div>
          <UseAnimations animation={Edit} />
          <UseAnimations animation={Delete} onClick={handleShow} />
        </div>
      </Col>
    );
  });
};

export default Item;
