import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SaleItemCard from "./SaleItemCard";
//import products from "./products";

export default function FeaturedProducts() {
  var [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BACKEND_SERVER_URL + "/api/featured-products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const rowStyle = {
    maxWidth: "1200px",
  };
  return (
    <Container fluid className="bg-white py-5">
      <h2 className="text-center mb-5">Featured Products and Deals</h2>
      <Row style={rowStyle} className="mx-auto">
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={4} key={index}>
            <SaleItemCard product={product} className="mb-4" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
