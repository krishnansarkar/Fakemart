import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import CartContext from "../../contexts/CartContext";

export default function CheckoutPage() {
  const cart = useContext(CartContext);

  const [message, setMessage] = useState("");

  const onCheckout = async () => {
    try {
      var items = cart.items.map((item) => {
        return {
          name: item.name,
          quantity: item.quantity,
        };
      });
      console.log(items);
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_SERVER_URL + "/create-checkout-session",
        {
          items: items,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          maxRedirects: 5,
        }
      );
      window.location.href = response.data;
    } catch (error) {
      console.error("Error creating checkout session: ", error);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      cart.clear();
      setMessage("Purchase confirmed!");
    } else if (query.get("canceled")) {
      setMessage("Purchase canceled!");
    }
  }, [cart]);

  const cartDisplay = (
    <>
      {cart.items.map((item, index) => (
        <div>
          <Row key={index}>
            <Col xs={8} className="align-middle">
              {item.name}
            </Col>
            <Col>
              ${item.quantity * item.price}
              <Button
                className="ms-3"
                variant="dark"
                onClick={() => {
                  cart.cancelItem(item.name);
                }}
              >
                X
              </Button>
            </Col>
          </Row>
          <Row className="border-bottom mb-2">
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
              {item.quantity}
              <Button
                className="ms-2"
                variant="light"
                onClick={() => {
                  cart.removeItem(item.name);
                }}
              >
                -
              </Button>
            </Col>
          </Row>
        </div>
      ))}
      <Row>
        <hr />
      </Row>
      <Row>
        <Col xs={8}>Total:</Col>
        <Col>${cart.getTotalCost()}</Col>
      </Row>
      <Button type="submit" onClick={onCheckout}>
        Checkout
      </Button>
    </>
  );

  const emptyCartDisplay = (
    <>
      <p>Cart is empty!</p>
      <p>
        Go to <Link to="/menus">menu!</Link>
      </p>
    </>
  );

  const purchaseConfirmationDisplay = <h3>{message}</h3>;

  return (
    <Container className="py-5">
      {purchaseConfirmationDisplay}
      {cart.getCount() > 0 ? cartDisplay : emptyCartDisplay}
    </Container>
  );
}
