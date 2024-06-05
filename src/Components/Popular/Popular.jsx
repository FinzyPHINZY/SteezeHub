import "./Popular.css";
import data from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  const products = data.map((item) => {
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
