import "./NewCollections.css";
import Item from "../Items/Item";
import { useEffect, useState } from "react";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("https://steezehub-backend.onrender.com/product/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setNew_collection(data.data);
        console.log(data);
      });
  }, []);

  const products = new_collection.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  return (
    <div className="new__collections">
      <h1>new collections</h1>
      <hr />
      <div className="collections">{products}</div>
    </div>
  );
};

export default NewCollections;
