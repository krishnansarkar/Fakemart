import Container from "react-bootstrap/Container";
import FeaturedProducts from "./FeaturedProducts";
import contactInfo from "../../baked-data/contactInfo.js";

export default function HomePage() {
  const heroContainerStyle = {
    backgroundImage: "url('/images/heroimage.png')",
    backgroundSize: "cover",
    height: "700px",
    position: "relative",
  };

  const heroOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(252, 238, 212, 0.8)",
  };

  const heroTitleStyle = {
    "max-width": "1000px",
  };

  const heroDescriptionStyle = {
    "max-width": "770px",
  };

  const heroAddressStyle = {
    "max-width": "500px",
  };

  return (
    <>
      <Container fluid style={heroContainerStyle}>
        <div style={heroOverlayStyle} className="text-center py-5">
          <div className="mt-5 mx-auto" style={heroTitleStyle}>
            <h1 className="display-1 fw-bold">
              Madeup traditions brought to a doorstep
            </h1>
          </div>
          <div className="mt-5 mx-auto px-2" style={heroDescriptionStyle}>
            <h3 className="fw-normal">
              Welcome to Fakemart, where you can indulge your senses with
              authentic cuisine. Our goal is to provide a welcoming shopping and
              dining experience for our customers. The market is stocked daily
              with fresh produce, meat, fish and more. Our restaurant also
              offers a wide range of traditional dishes, sushi, and other
              specialties.
            </h3>
          </div>
          <div className="mt-5 mx-auto" style={heroAddressStyle}>
            <h4 className="fw-bold">{contactInfo.address}</h4>
          </div>
        </div>
      </Container>
      <FeaturedProducts />
    </>
  );
}
