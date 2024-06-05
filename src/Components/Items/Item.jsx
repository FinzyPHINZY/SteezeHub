import { NavLink } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="item">
      <NavLink to={`/product/${item.id}`}>
        <img src={item.image} alt="" onClick={goToTop} />
      </NavLink>

      <p>{item.name}</p>
      <div className="item__prices">
        <div className="item__price_new">${item.new_price}</div>
        <div className="item__price_old">${item.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
