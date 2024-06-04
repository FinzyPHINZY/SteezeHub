import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="SteezeHub" />
        <p>SteezeHub</p>
      </div>
      <ul className="navbar__menu">
        <li onClick={() => setMenu("shop")}>
          Shop {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>Men {menu === "men" && <hr />}</li>
        <li onClick={() => setMenu("women")}>
          Women {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="navbar__login_cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart" />
        <div className="navbar__cart_count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
