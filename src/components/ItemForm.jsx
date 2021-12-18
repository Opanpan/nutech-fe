import { Button, Row, Form, Modal, InputGroup } from "react-bootstrap";

export default function ItemForm(props) {
  const handleClose = () => props.hide(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buat Data Barang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group>
                <Form.Label>Nama Barang</Form.Label>
                <Form.Control type="text" placeholder="Nama Barang" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Harga Beli</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Rp</InputGroup.Text>
                  <Form.Control type="number" placeholder="Harga Beli" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Harga Jual</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Rp</InputGroup.Text>
                  <Form.Control type="number" placeholder="Harga Jual" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Stok</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Pcs</InputGroup.Text>
                  <Form.Control type="number" placeholder="Stok" />
                </InputGroup>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
