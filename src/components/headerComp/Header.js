import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import "./Header.css";

// Header Component
const Header = () => {
  // State to display login/logout button
  const [btnName, setBtnName] = useState("Login");

  function loginBtnHandle() {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  }

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={LOGO_URL} alt="App Logo" />
        <span>EatWise🍴</span>
      </div>

      {/* Navigation Items */}
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={loginBtnHandle}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
