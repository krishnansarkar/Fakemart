import { Container, Row, Col } from "react-bootstrap";
import TopDisplay from "./TopDisplay";
import sushiPlatters from "./sushiplatters";

export default function CateringPage() {
  const rowStyle = {
    maxWidth: "800px",
  };

  const thumbnailContainerStyle = {
    maxWidth: "300px",
    maxHeight: "300px",
    overflow: "hidden",
  };

  const thumbnailImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const galleryStyle = {
    width: "1000px",
  };

  const galleryTitleStyle = {
    width: "700px",
    textAlign: "center",
  };

  return (
    <>
      <TopDisplay />
      <Container fluid className="bg-white py-5 justify-content-center">
        <Row style={rowStyle} className="mx-auto my-5">
          <Col>
            <h1>01</h1>
            <h3>Sushi Platters</h3>
            <p className="lead">
              Choose between rolls, sushi, sashimi or any combination of the
              three. We'll work with your price point to have a sushi platter
              for your next party or gathering.
            </p>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/images/sushiplatter.png"}
              alt="Sushi Platter"
              height={356}
            />
          </Col>
        </Row>
        <Row style={rowStyle} className="mx-auto my-5">
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/images/lunchbox.png"}
              alt="Lunch Box"
              height={356}
            />
          </Col>
          <Col>
            <h1>02</h1>
            <h3>Lunch Boxes</h3>
            <p className="lead">
              ~$16/person. Our lunchboxes come in two varieties. One is a
              protein and a couple Korean sides served with rice (pictured). The
              other is an assortment of kimbap. Both are served with free soup.
            </p>
          </Col>
        </Row>
        <Row style={rowStyle} className="mx-auto my-5">
          <Col>
            <h1>03</h1>
            <h3>Fruit Platters</h3>
            <p className="lead">
              $3.99/pound of fruit. Call and let us know what fruits you would
              like. Don't know what you want? Don't worry--we'll tell you which
              fruits are in-season and look the best and we can have a 12, 16 or
              18-inch platter for you in as little as 30 minutes. Just call.
            </p>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/images/fruitplatter.png"}
              alt="Fruit Platter"
              height={356}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-white py-5 justify-content-center">
        <Row className="mx-auto pb-5" style={galleryTitleStyle}>
          <h1>Sushi Platters</h1>
          <p className="lead">
            Here are some of our signature platters. Call and ask for the sushi
            team--we can often have them ready in as quick as an hour (although
            24 hours advance notice is very much appreciated). Just ask for the
            platters by number or tell us what you like and we can make
            something perfect for your event.
          </p>
        </Row>
        <Row className="mx-auto" style={galleryStyle}>
          {sushiPlatters.map((platter, index) => (
            <Col key={"Platter " + index} xs={12} md={4} className="pb-3">
              <div style={thumbnailContainerStyle}>
                <img
                  src={platter.imageUrl}
                  alt={"Platter " + index}
                  style={thumbnailImageStyle}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
