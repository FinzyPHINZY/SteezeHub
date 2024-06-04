import "./Item.css";
const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt="" />
      <p>{name}</p>
      <div className="item__prices">
        <div className="item__price_new">${new_price}</div>
        <div className="item__price_old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
