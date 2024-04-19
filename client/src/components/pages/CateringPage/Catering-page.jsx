import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import TopDisplay from "./TopDisplay";
import PlatterBurb from "./PlatterBlurb";
import PlatterGallery from "./PlatterGallery";

export default function CateringPage() {
  var [catering, setCatering] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BACKEND_SERVER_URL + "/api/catering"
        );
        console.log(response);
        setCatering(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container fluid className="bg-white py-5">
        <TopDisplay />
        <PlatterBurb
          index="01"
          title="Sushi Platters"
          description="Choose between rolls, sushi, sashimi or any combination of the three. We'll work with your price point to have a sushi platter for your next party or gathering."
          imageUrl={process.env.PUBLIC_URL + "/images/sushiplatter.png"}
          altText="Sushi Platter"
        />
        <PlatterBurb
          index="02"
          title="Lunch Boxes"
          description="~$16/person. Our lunchboxes come in two varieties. One is a
            protein and a couple Korean sides served with rice (pictured). The
            other is an assortment of kimbap. Both are served with free soup."
          imageUrl={process.env.PUBLIC_URL + "/images/lunchbox.png"}
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
          imageUrl={process.env.PUBLIC_URL + "/images/fruitplatter.png"}
          altText="Fruit Platter"
        />
        <PlatterGallery
          title="Sushi Platters"
          description="Here are some of our signature platters. Call and ask for the sushi
            team--we can often have them ready in as quick as an hour (although
            24 hours advance notice is very much appreciated). Just ask for the
            platters by number or tell us what you like and we can make
            something perfect for your event."
          platters={catering}
        />
      </Container>
    </>
  );
}
