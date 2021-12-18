import { Col } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import Edit from "react-useanimations/lib/edit";
import Delete from "react-useanimations/lib/trash";

const Item = ({ items }) => {
  return items.map((item, index) => {
    return (
      <Col key={index}>
        <div className="item-container d-flex align-items-center justify-content-around mt-5">
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
          <UseAnimations animation={Delete} />
        </div>
      </Col>
    );
  });
};

export default Item;
