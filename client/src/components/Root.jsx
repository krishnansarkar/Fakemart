import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  const websiteStyle = {
    minWidth: "450px",
  };

  const initCart = [
    { name: "balogna", quantity: 2 },
    { name: "romjobie", quantity: 1 },
  ];

  const [cart, setCart] = useState(initCart);

  const cartFunctions = {
    getCount() {
      return cart.reduce(
        (accumulator, element) => accumulator + element.quantity,
        0
      );
    },
    cancelItem(itemName) {
      setCart(cart.filter((item) => item.name !== itemName));
    },
    addItem(itemName) {
      const indexOfItem = cart.findIndex((item) => item.name === itemName);
      console.log(indexOfItem);
      if (indexOfItem === -1) {
        setCart([{ name: itemName, quantity: 1 }, ...cart]);
      } else {
        const newCart = [...cart];
        newCart[indexOfItem].quantity += 1;
        setCart(newCart);
      }
    },
    removeItem(itemName) {
      const indexOfItem = cart.findIndex((item) => item.name === itemName);
      if (indexOfItem !== -1) {
        const newCart = [...cart];
        newCart[indexOfItem].quantity -= 1;
        if (newCart[indexOfItem].quantity === 0) {
          this.cancelItem(itemName);
        } else {
          setCart(newCart);
        }
      }
    },
  };

  return (
    <div style={websiteStyle}>
      <Navbar cartFunctions={cartFunctions} cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
}
