import { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { cartTotalSum, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  const items = all_product.map(
    (item) =>
      cartItems[item.id] > 0 && (
        <div key={item.id}>
          <div className="cartitems__format  cartitems__format_main">
            <img src={item.image} className="cart__product_icon" alt="" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className="cartitems__quantity">
              {cartItems[item.id]}
            </button>
            <p>${item.new_price * cartItems[item.id]}</p>
            <img
              src={remove_icon}
              onClick={() => {
                removeFromCart(item.id);
              }}
              className="cartitems__remove_icon"
              alt=""
            />
          </div>
          <hr />
        </div>
      )
  );
  return (
    <div className="cartitems">
      <div className="cartitems__format_main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {items}

      <div className="cartitems__down">
        <div className="cartitems__total">
          <h1>Cart Totals</h1>
          <div className="">
            <div className="cartitems__total_item">
              <p>Subtotal</p>
              <p>$ {cartTotalSum()}</p>
            </div>
            <hr />
            <div className="cartitems__total_item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems__total_item">
              <h3>Total</h3>
              <h3>$ {cartTotalSum()}</h3>
            </div>
            <button>PROCEED TO CHECOUT</button>
          </div>
        </div>
        <div className="cartitems__promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems__promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
