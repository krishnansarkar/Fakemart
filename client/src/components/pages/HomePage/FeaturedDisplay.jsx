import { Container, Row, Col, Button } from "react-bootstrap";

export default function FeaturedDisplay() {
  return (
    <Container fluid className="bg-primary py-5">
      <Row>
        <Col>
          <img
            src={process.env.PUBLIC_URL + "/images/KoreanFoodSaleFlyer.png"}
            alt="50% Discount on Catering food from 6PM to close."
            width={686}
          />
        </Col>
        <Col>
          <div className="bg-white mx-4 p-5">
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
