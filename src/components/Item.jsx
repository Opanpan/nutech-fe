import { Col } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import Edit from "react-useanimations/lib/edit";
import Delete from "react-useanimations/lib/trash";

const Item = () => {
  return (
    <Col>
      <div className="item-container d-flex align-items-center justify-content-around mt-5">
        <div className="item-image"></div>
        <div className="item-font">Pakaian Anak</div>
        <div className="item-font">Rp. 15,000</div>
        <div className="item-font">Rp. 20,000</div>
        <div className="item-font">20</div>
        <UseAnimations animation={Edit} />
        <UseAnimations animation={Delete} />
      </div>
    </Col>
  );
};

export default Item;
