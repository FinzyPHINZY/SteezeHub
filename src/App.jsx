import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_men.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter basename="/SteezeHub">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/men"
            element={<Shop banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<Shop banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shop banner={kids_banner} category="kids" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
