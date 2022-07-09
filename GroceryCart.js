import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };
  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => {
      prevCount + 1
    });
  }
  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item} x{count} ';'
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} onClick={handleClick}/>
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} onClick={handleClick}/>
    </div>
  );
}