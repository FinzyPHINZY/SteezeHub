import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = () => {
  const products = new_collection.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
      />
    );
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
