import MenuItem from "./MenuItem";

export default function MenuCategory(props) {
  const items = props.items || [];

  return (
    <div className="mb-5">
      <h4>{props.name}</h4>
      {props.description && <p>{props.description}</p>}
      {items.map((item) => (
        <>
          <hr />
          <MenuItem item={item} cart={props.cart} />
        </>
      ))}
    </div>
  );
}
