import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  const websiteStyle = {
    minWidth: "450px",
  };

  return (
    <div style={websiteStyle}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
