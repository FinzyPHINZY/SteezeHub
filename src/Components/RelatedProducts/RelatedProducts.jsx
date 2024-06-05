import "./RelatedProducts.css";
import data from "../Assets/data";
import Item from "../Items/Item";

const RelatedProducts = () => {
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
