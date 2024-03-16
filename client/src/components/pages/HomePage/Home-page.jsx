import Container from "react-bootstrap/Container";
import FeaturedDisplay from "./FeaturedDisplay";
import FeaturedProducts from "./FeaturedProducts";

export default function HomePage() {
  const heroContainerStyle = {
    backgroundImage: "url('/images/heroimage.png')",
    backgroundSize: "cover",
    height: "847px",
    position: "relative",
  };

  const heroOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.8)",
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
              Korean traditions brought to Princeton's doorstep
            </h1>
          </div>
          <div className="mt-5 mx-auto" style={heroDescriptionStyle}>
            <h3 className="fw-normal">
              Welcome to Woori Mart Princeton, where you can indulge your senses
              with authentic Korean cuisine. Our goal is to provide a welcoming
              shopping and dining experience for our customers. The market is
              stocked daily with fresh produce, meat, fish and more. Our
              restaurant also offers a wide range of traditional Korean dishes,
              sushi, and other specialties.
            </h3>
          </div>
          <div className="mt-5 mx-auto" style={heroAddressStyle}>
            <h4 className="fw-bold">
              64 Princeton Hightstown Rd West Windsor, NJ 08550
            </h4>
          </div>
        </div>
      </Container>
      <FeaturedDisplay />
      <div>
        <FeaturedProducts />
      </div>
    </>
  );
}
