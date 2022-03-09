import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header({ user }) {
  return (
    <header>
      <div className="header-wrapper">
        <span className="logo">
          <a href="/">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/128px-Google_Contacts_icon.svg.png"
              }
              alt=""
            />
            <span>Contact Manager</span>
          </a>
        </span>
        <div className="header-acount">
          <span>{user && user.email}</span>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
