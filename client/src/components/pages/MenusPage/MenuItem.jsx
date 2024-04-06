import { Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function MenuItem(props) {
  const itemPriceStyle = {
    textAlign: "right",
  };

  const { item } = props;
  const cart = useContext(CartContext);
  const quantity = cart.getQuantity(item.name);
  //const quantity = 0;

  return (
    <Row>
      <Col xs={5}>
        <b>{item.name}</b>
        {item.description !== "" && <p>{item.description}</p>}
      </Col>
      <Col style={itemPriceStyle}>${item.price}</Col>

      <Col>
        <Button
          className="me-2"
          variant="light"
          onClick={() => {
            cart.addItem(item.name, item.price);
          }}
        >
          +
        </Button>
        {quantity > 0 && (
          <>
            {quantity}
            <Button
              className="ms-2"
              variant="light"
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
