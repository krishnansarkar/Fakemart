import { Row, Col } from "react-bootstrap";

export default function MenuItem(props) {
  const itemPriceStyle = {
    textAlign: "right",
  };

  const { item } = props;

  return (
    <Row>
      <Col xs={8}>
        <b>{item.name}</b>
        {item.description !== "" && <p>{item.description}</p>}
      </Col>
      <Col style={itemPriceStyle}>${item.price}</Col>
    </Row>
  );
}
