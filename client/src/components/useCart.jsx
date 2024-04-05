import { useState } from "react";

export default function useCart() {
  const initCart = [
    { name: "balogna", quantity: 2 },
    { name: "romjobie", quantity: 1 },
  ];

  const [items, setItems] = useState(initCart);

  const getCount = () => {
    return items.reduce(
      (accumulator, element) => accumulator + element.quantity,
      0
    );
  };

  const cancelItem = (itemName) => {
    setItems(items.filter((item) => item.name !== itemName));
  };

  const addItem = (itemName) => {
    const indexOfItem = items.findIndex((item) => item.name === itemName);
    console.log(indexOfItem);
    if (indexOfItem === -1) {
      setItems([{ name: itemName, quantity: 1 }, ...items]);
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
        this.cancelItem(itemName);
      } else {
        setItems(newItems);
      }
    }
  };

  return {
    items,
    addItem,
    removeItem,
    cancelItem,
    getCount,
  };
}
