import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { CircleArrowDown01Icon } from "hugeicons-react";
const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const logout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/SteezeHub/");
  };

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav_menu_visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="SteezeHub" />
        <p>SteezeHub</p>
      </div>
      <CircleArrowDown01Icon
        className="navbar__dropdown"
        onClick={dropdownToggle}
      />
      <ul ref={menuRef} className="navbar__menu">
        <li onClick={() => setMenu("shop")}>
          <NavLink to="/">Shop </NavLink>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <NavLink to="/men">Men </NavLink>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <NavLink to="/women">Women </NavLink>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <NavLink to="/kids">Kids </NavLink>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="navbar__login_cart">
        {localStorage.getItem("auth-token") ? (
          <>
            <button onClick={logout}>Logout</button>{" "}
            <NavLink to="/cart">
              <img src={cart_icon} alt="Cart" />
            </NavLink>{" "}
            <div className="navbar__cart_count">{getCartCount()}</div>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
