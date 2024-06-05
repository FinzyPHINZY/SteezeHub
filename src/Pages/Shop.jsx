import { useContext, useEffect } from "react";
import "./CSS/Shop.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const Shop = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const products = all_product
    .filter((item) => item.category === category)
    .map((item) => <Item key={item.id} item={item} />);
  return (
    <div className="shopcategory">
      <img src={banner} alt="" className="shopcategory__banner" />
      <div className="shopcategory__indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory__sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory__products">{products}</div>
      <div className="shopcategory__loadmore">Explore More</div>
    </div>
  );
};

export default Shop;
