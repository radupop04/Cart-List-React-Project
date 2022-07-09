import React from "react";

export default function ItemList({ items, onItemClick }) {
  const handleItemClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => {
      prevCount + 1;
    });
  }
  return (
    <div>
      {items.map((item, index) => (
        <button value={item} onItemClick={handleItemClick} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}