import { useState } from "react";
import { assets } from "../assets/assets.js";
import "./Nav.css";

function Nav() {
  const [underline, setUnderline] = useState("home");

  return (
    <div className="nav">
      <img src={assets.logo} alt="Logo" />
      <ul className="nav-menu">
        <li onClick={() => setUnderline("home")} className={underline === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setUnderline("menu")} className={underline === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setUnderline("mobile-app")} className={underline === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => setUnderline("contact")} className={underline === "contact" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="nav-cart">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Nav;
