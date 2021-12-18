import Item from "./Item";
import ItemForm from "./ItemForm";

export default function ItemList(props) {
  // HANDLE ADD EMPLOYEE
  const addItem = (item) => {
    console.log(item);
  };

  return (
    <div>
      <Item />
      <Item />
      <Item />
      <Item />
      <ItemForm onSubmit={addItem} show={props.show} hide={props.hide} />
    </div>
  );
}
