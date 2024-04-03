import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  const websiteStyle = {
    minWidth: "450px",
  };

  const cart = [
    { name: "balogna", quantity: 2 },
    { name: "romjobie", quantity: 1 },
  ];

  function getCartCount() {
    return cart.reduce(
      (accumulator, element) => accumulator + element.quantity,
      0
    );
  }

  return (
    <div style={websiteStyle}>
      <Navbar getCartCount={getCartCount} cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
}
