import { Card, ListGroup } from "react-bootstrap";

export default function SaleItemCard(props) {
  const { product, className } = props;

  const cardImageStyle = {
    height: "180px",
    "object-fit": "cover",
  };

  return (
    <Card className={className}>
      <Card.Img variant="top" src={product.image} style={cardImageStyle} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{product.name}</ListGroup.Item>
        <ListGroup.Item>Quantity: {product.quantity}</ListGroup.Item>
        <ListGroup.Item>Original: {product.price}</ListGroup.Item>
        <ListGroup.Item>Sale: {product.deal}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
