import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Row, Form, Modal, InputGroup } from "react-bootstrap";

export default function ItemForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  const purchase_price = useRef({});
  purchase_price.current = watch("purchase_price", "");

  const handleClose = () => {
    props.hide(false);
    setValue("name", "");
    setValue("purchase_price", "");
    setValue("selling_price", "");
    setValue("quantity", "");
  };

  const handleSubmitForm = (data) => {
    data.userId = localStorage.getItem("id");
    setValue("name", "");
    setValue("purchase_price", "");
    setValue("selling_price", "");
    setValue("quantity", "");
    handleClose();
    props.onSubmit(data);
    console.log(data);
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buat Data Barang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Row className="mb-3">
              <Form.Group>
                <Form.Label>Nama Barang</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Nama Barang"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name?.type === "required" && (
                  <p className="error-font">Nama barang tidak boleh kosong !</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Harga Beli</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Rp</InputGroup.Text>
                  <Form.Control
                    id="purchase_price"
                    type="number"
                    placeholder="Harga Beli"
                    {...register("purchase_price", {
                      required: true,
                    })}
                  />
                </InputGroup>
                {errors.purchase_price?.type === "required" && (
                  <p className="error-font">Harga beli tidak boleh kosong !</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Harga Jual</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Rp</InputGroup.Text>
                  <Form.Control
                    id="selling_price"
                    type="number"
                    placeholder="Harga Jual"
                    {...register("selling_price", {
                      required: true,
                      validate: (value) => value - purchase_price.current > 0,
                    })}
                  />
                </InputGroup>
                {errors.selling_price?.type === "required" && (
                  <p className="error-font">Harga jual tidak boleh kosong !</p>
                )}
                {errors.selling_price?.type === "validate" && (
                  <p className="error-font">
                    Harga jual tidak boleh kurang dari harga beli !
                  </p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Stok</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Pcs</InputGroup.Text>
                  <Form.Control
                    id="quantity"
                    type="number"
                    placeholder="Stok"
                    {...register("quantity", {
                      required: true,
                      validate: (value) => value >= 0,
                    })}
                  />
                </InputGroup>
                {errors.quantity?.type === "required" && (
                  <p className="error-font">Stock tidak boleh kosong !</p>
                )}
                {errors.quantity?.type === "validate" && (
                  <p className="error-font">Stock tidak kurang dari 0 !</p>
                )}
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
