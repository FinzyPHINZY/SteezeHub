import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import stardullicon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  return (
    <div className="productDisplay">
      <div className="productDisplay__left">
        <div className="productDisplay__img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay__img">
          <img
            src={product.image}
            alt=""
            className="productDisplay__main_img"
          />
        </div>
      </div>
      <div className="productDisplay__right">
        <h1>{product.name}</h1>
        <div className="productDisplay__right_star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardullicon} alt="" />
          <p>(122)</p>
        </div>

        <div className="prices">
          <div className="prices__old">${product.old_price}</div>
          <div className="prices__new">${product.new_price}</div>
        </div>
        <div className="product__description">
          A lightweight, usually knitted, pullover shirt, close-fitting and a
          wit a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="product__size">
          <h1>Select Size</h1>
          <div className="product__size_right">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="right__category">
          Category: <span>Women, T-Shirt, Crop Top</span>
        </p>
        <p className="right__category">
          Tags: <span>Moden, Latest</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
