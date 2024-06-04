import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={footer_logo} alt="" />
        <p>SteezeHub</p>
      </div>
      <ul className="footer__links">
        <li>Company</li>
        <li>Producs</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer__social_icon">
        <div className="footer__icons_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer__icons_container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer__icons_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer__copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
