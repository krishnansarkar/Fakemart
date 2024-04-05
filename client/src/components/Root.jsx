import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  const websiteStyle = {
    minWidth: "450px",
  };

  const [items, setItems] = useState([]);

  const getCount = () => {
    return items.reduce(
      (accumulator, element) => accumulator + element.quantity,
      0
    );
  };

  const getQuantity = (itemName) => {
    const indexOfItem = items.findIndex((item) => item.name === itemName);
    if (indexOfItem !== -1) {
      return items[indexOfItem].quantity;
    }
    return 0;
  };

  const cancelItem = (itemName) => {
    setItems(items.filter((item) => item.name !== itemName));
  };

  const addItem = (itemName, price) => {
    const indexOfItem = items.findIndex((item) => item.name === itemName);

    if (indexOfItem === -1) {
      setItems([{ name: itemName, quantity: 1, price: price }, ...items]);
    } else {
      const newItems = [...items];
      newItems[indexOfItem].quantity += 1;
      setItems(newItems);
    }
  };

  const removeItem = (itemName) => {
    const indexOfItem = items.findIndex((item) => item.name === itemName);
    if (indexOfItem !== -1) {
      const newItems = [...items];
      newItems[indexOfItem].quantity -= 1;
      if (newItems[indexOfItem].quantity === 0) {
        cancelItem(itemName);
      } else {
        setItems(newItems);
      }
    }
  };

  const cart = {
    items,
    getCount,
    getQuantity,
    cancelItem,
    addItem,
    removeItem,
  };

  return (
    <div style={websiteStyle}>
      <Navbar cart={cart} />
      <Outlet context={cart} />
      <Footer />
    </div>
  );
}
