import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")}className={menu === "home" ? "active" : " "}>home</li>
        <li onClick={()=>setMenu("menu")}className={menu === "menu" ? "active" : " "}> menu </li>
        <li onClick={()=>setMenu("mobile-app")}className={menu === "mobile-app" ? "active" : " "}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}className={menu === "contact-us" ? "active" : " "}>contact us</li>
      </ul>
      <div className="navbar-search">
        <img src={assets.search_icon} alt="search_icon" className="search" />
        <div className="navbar-basket">
          <img src={assets.basket_icon} alt="" className="basket" />
          <div className="dot"></div>
        </div>
        <button id="hover-effects">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
