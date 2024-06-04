import "./Popular.css";
import data from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  const products = data.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    );
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
