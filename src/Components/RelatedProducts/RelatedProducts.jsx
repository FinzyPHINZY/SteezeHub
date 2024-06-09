import "./RelatedProducts.css";
import Item from "../Items/Item";
import { useEffect, useState } from "react";

const RelatedProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product/")
      .then((res) => res.json())
      .then((output) => {
        setAllProducts(output.data);
      });
  }, []);

  const random = Math.floor(Math.random() * 32);

  const data = allProducts.slice(random, random + 4);

  const products = data.map((item) => <Item key={item.id} item={item} />);
  return (
    <div className="related">
      <h1>Related Products</h1>
      <hr />
      <div className="related__item">{products}</div>
    </div>
  );
};

export default RelatedProducts;
