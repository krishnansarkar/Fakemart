// Todo:
// 1. Fix responsivity
// 2. Showcase random product in featured sales.

import { Container, Row, Col, Button } from "react-bootstrap";

export default function FeaturedDisplay() {
  const featuredLinkStyle = {
    "max-width": "332px",
  };

  const imageStyle = {
    maxWidth: "100%",
  };

  return (
    <Container fluid className="bg-primary py-5 justify-content-center">
      <Row>
        <Col xs={12} md={8}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/KoreanFoodSaleFlyer.png"}
              alt="50% Discount on Catering food from 6PM to close."
              style={imageStyle}
            />
          </div>
        </Col>
        <Col>
          <div className="bg-white py-5 px-5">
            <h1>Sales going on right now.</h1>
            <p>
              See just a few of our sales and featured products here at Woori
              Mart Princeton.
            </p>
            <Button variant="outline-secondary" href="#featureddeals">
              Featured Deals
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
