import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-color">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
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
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li>
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/blogs">
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
                More
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item" to="/certifications">
                  Certifications
                </Link>
                {/* <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
