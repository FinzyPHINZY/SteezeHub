import "./Popular.css";
import Item from "../Items/Item";
import { useEffect, useState } from "react";

const Popular = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product/popularwomen")
      .then((res) => res.json())
      .then((data) => setPopularItems(data.data));
  }, []);

  const products = popularItems.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  return (
    <div className="popular">
      <h1>Popular with women</h1>
      <hr />
      <div className="popular__item">{products}</div>
    </div>
  );
};

export default Popular;
