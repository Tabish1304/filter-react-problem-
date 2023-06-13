import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from "..//assets/Library.svg";

const Navbar = () => {
  function OpenMenu(){
    document.body.classList += " menu-open";
  }

  function closeMenu(){
    document.body.classList.remove( " menu-open")
  }
  return (
    <nav>
      <div className="nav-container">
        <a href="/">
          <img className="logo" src={Logo} alt="" />
        </a>
        <ul className="nav-links">
          <li className="nav-list">
            <a className="nav-link " href=" /">
              Home
            </a>
          </li>
          <li className="nav-list">
            <a className="nav-link " href=" /">
              Books
            </a>
          </li>
          <button className="btn-menu" onClick={OpenMenu}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <li className="nav-icon">
            <a className="nav-link" href="/cart">
              Cart
            </a>
            <span className="cart-length">2</span>
          </li>
        </ul>

        <div className="menu-backdrop">
          <button className="btn-menu btn-menu-close" onClick={closeMenu}>
            {/* <FontAwesomeIcon icon="times" /> */}
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className="menu-links">
            <li className="menu-list">
              <a href="/" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-list">
              <a href to="/books" className="menu-link">
                Books
              </a>
            </li>
            <li className="menu-list">
              <a href to="/cart" className="menu-link">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
