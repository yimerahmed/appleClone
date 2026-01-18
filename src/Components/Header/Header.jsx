import React from "react";
import './Header.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import '../../assets/js/bootstrap'
import apple_logo from "../../assets/images/icons/logo.png"
import search_logo from "../../assets/images/icons/search-icon.png"
import cart_logo from "../../assets/images/icons/cart.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-toggleable-sm">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <Link className="navbar-brand mx-auto" to="/">
            <img src={apple_logo} alt="Logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/mac/">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphones/">
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/ipad/">
                  iPad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/watch/">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tv/">
                  TV
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/music/">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/support/">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img src={search_logo} alt="Search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/">
                  <img src={cart_logo} alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
