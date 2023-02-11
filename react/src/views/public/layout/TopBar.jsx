import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../assets/Images";
import { navigationLinks } from "../../../core/navigationLinks";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      id="header"
      className={
        isScrolled
          ? "d-flex align-items-center fixed-top"
          : "d-flex align-items-center"
      }
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img src={Logo} alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className={`navbar ${toggle ? "navbar-mobile" : ""}`}>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "active" : "",
                  })}
                  to={link.url}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}

            {/* 
            DROP DOWN ELEMENT IF NEEDED
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
          </ul>
          <i
            className={`bi mobile-nav-toggle ${!toggle ? "bi-list" : "bi-x"}`}
            onClick={() => setToggle(!toggle)}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
