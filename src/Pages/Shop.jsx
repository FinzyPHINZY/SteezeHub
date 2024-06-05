import { useContext, useEffect } from "react";
import "./CSS/Shop.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const Shop = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);
  const products = all_product
    .filter((item) => item.category === category)
    .map((item) => (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    ));
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
