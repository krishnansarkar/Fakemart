import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartContext from "./contexts/CartContext";

export default function Root() {
  const websiteStyle = {
    minWidth: "450px",
    backgroundColor: "#FAECD2",
  };

  const [items, setItems] = useState([]);
  const [cookie, setCookie] = useCookies(["cart"]);
  const cookieValue = cookie.cart;

  useEffect(() => {
    if (cookieValue != null) {
      setItems(cookieValue);
    }
  }, []);

  const getCount = () => {
    if (items.length === 0) {
      return 0;
    }
    return items.reduce(
      (accumulator, element) => accumulator + element.quantity,
      0
    );
  };

  const getTotalCost = () => {
    if (items.length === 0) {
      return 0;
    }

    return items.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
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
    setCookie("cart", JSON.stringify(cart.items), { path: "/" });
  };

  const addItem = (itemName, price) => {
    const indexOfItem = items.findIndex((item) => item.name === itemName);

    if (indexOfItem === -1) {
      setItems([...items, { name: itemName, quantity: 1, price: price }]);
    } else {
      const newItems = [...items];
      newItems[indexOfItem].quantity += 1;
      setItems(newItems);
    }

    setCookie("cart", cart.items, { path: "/" });
    // setCookie("cart", "test", { path: "/" });
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

    setCookie("cart", cart.items, { path: "/" });
  };

  const clear = () => {
    setItems([]);

    setCookie("cart", cart.items, { path: "/" });
  };

  const cart = {
    items,
    getCount,
    getQuantity,
    cancelItem,
    addItem,
    removeItem,
    getTotalCost,
    clear,
  };

  return (
    <div style={websiteStyle}>
      <CartContext.Provider value={cart}>
        <Navbar />
        <Outlet />
      </CartContext.Provider>
      <Footer />
    </div>
  );
}
