import { React, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = (props) => {
  const location = useLocation();
  const navbarTogglerRef = useRef(null);
  const handleMenuItemClick = () => {
    if (window.innerWidth <= 992) {
      navbarTogglerRef.current.click();
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-color">
        <div class="container-fluid mobile_navbar_pad">
          <Link class="navbar-brand" to="/" onClick={handleMenuItemClick}>
            {" "}
            Rahul Agarwal
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={navbarTogglerRef}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li>
                <Link class="nav-link" to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={handleMenuItemClick}
                  className={`nav-link ${
                    location.pathname === "/projects" ? "active" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  class="nav-link"
                  to="/blogs"
                  onClick={handleMenuItemClick}
                >
                  Blogs
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {location.pathname === "/certifications" ? (
                    <span style={{ color: "white" }}>Certifications</span>
                  ) : location.pathname === "/youtube" ? (
                    <span style={{ color: "white" }}>YouTube</span>
                  ) : location.pathname === "/displayPlaylist" ? (
                    <span style={{ color: "white" }}>YouTube</span>
                  ) : (
                    "More"
                  )}
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    class="dropdown-item"
                    to="/certifications"
                    onClick={handleMenuItemClick}
                  >
                    Certifications
                  </Link>
                  <Link
                    class="dropdown-item"
                    to="/youtube"
                    onClick={handleMenuItemClick}
                  >
                    Youtube
                  </Link>

                  {/* <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a> */}
                </div>
              </li>
              <GoogleTranslate />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
