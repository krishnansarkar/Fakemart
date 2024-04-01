import { Container, Row, Col } from "react-bootstrap";
import Lightbox from "bs5-lightbox";

export default function PlatterGallery(props) {
  const thumbnailImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const thumbnailContainerStyle = {
    maxWidth: "300px",
    maxHeight: "300px",
    overflow: "hidden",
    display: "block",
    margin: "auto",
  };

  const galleryStyle = {
    maxWidth: "1000px",
  };

  const galleryTitleStyle = {
    maxWidth: "700px",
    textAlign: "center",
  };

  return (
    <Container fluid className="bg-white justify-content-center">
      <Row className="mx-auto pb-5" style={galleryTitleStyle}>
        <h1>{props.title}</h1>
        <p className="lead">{props.description}</p>
      </Row>
      <Row className="mx-auto" style={galleryStyle}>
        {props.platters.map((platter, index) => (
          <Col key={"Platter " + index} xs={12} md={4} className="pb-3">
            <div style={thumbnailContainerStyle}>
              <a
                href={platter.imageUrl}
                onClick={(e) => {
                  e.preventDefault();
                  const lightbox = new Lightbox(e.target);
                  lightbox.show();
                }}
              >
                <img
                  src={platter.imageUrl}
                  alt={"Platter " + index}
                  style={thumbnailImageStyle}
                  data-src={platter.imageUrl}
                  data-gallery={props.title + " gallery"}
                />
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
