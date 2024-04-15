import { Container, Row } from "react-bootstrap";

export default function FeaturedDisplay() {
  const imageStyle = {
    maxWidth: "1000px",
  };

  return (
    <Container fluid className="bg-primary py-5">
      <Row className="d-flex justify-content-center">
        <img
          src={process.env.PUBLIC_URL + "/images/KoreanFoodSaleFlyer.png"}
          alt="50% Discount on Catering food from 6PM to close."
          style={imageStyle}
        />
      </Row>
    </Container>
  );
}
