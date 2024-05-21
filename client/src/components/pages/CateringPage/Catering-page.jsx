import { Container } from "react-bootstrap";
import TopDisplay from "./TopDisplay";
import PlatterBurb from "./PlatterBlurb";

export default function CateringPage() {
  return (
    <>
      <Container fluid className="bg-white py-5">
        <TopDisplay />
        <PlatterBurb
          index="01"
          title="Sushi Platters"
          description="Choose between rolls, sushi, sashimi or any combination of the three.
            We'll work with your price point to have a sushi platter for your next party or gathering."
          imageUrl={process.env.PUBLIC_URL + "/images/CateringSushi.png"}
          altText="Sushi Platter"
        />
        <PlatterBurb
          index="02"
          title="Lunch Boxes"
          description="~$16/person. Our lunchboxes come in two varieties. One is a
            protein and a couple sides served with rice (pictured). The
            other is an assortment of kimbap. Both are served with free soup."
          imageUrl={process.env.PUBLIC_URL + "/images/CateringLunchBox.png"}
          altText="Lunch Box"
          flipOrder
        />
        <PlatterBurb
          index="03"
          title="Fruit Platters"
          description="$3.99/pound of fruit. Call and let us know what fruits you would
            like. Don't know what you want? Don't worry--we'll tell you which
            fruits are in-season and look the best and we can have a 12, 16 or
            18-inch platter for you in as little as 30 minutes. Just call."
          imageUrl={process.env.PUBLIC_URL + "/images/CateringFruit.png"}
          altText="Fruit Platter"
        />
      </Container>
    </>
  );
}
