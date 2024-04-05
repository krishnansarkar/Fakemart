import { Row, Col, Button } from "react-bootstrap";

export default function MenuItem(props) {
  const itemPriceStyle = {
    textAlign: "right",
  };

  const { item, cart } = props;
  const quantity = cart.getQuantity(item.name);
  //const quantity = 0;

  return (
    <Row>
      <Col xs={6}>
        <b>{item.name}</b>
        {item.description !== "" && <p>{item.description}</p>}
      </Col>
      <Col style={itemPriceStyle}>${item.price}</Col>

      <Col>
        <Button
          onClick={() => {
            cart.addItem(item.name);
          }}
        >
          +
        </Button>
        {quantity > 0 && (
          <>
            {quantity}
            <Button
              onClick={() => {
                cart.removeItem(item.name);
              }}
            >
              -
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
}
