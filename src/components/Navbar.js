import React from "react";

const Navbar = () => (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-color">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          {" "}
          &lt; Rahul Agarwal &gt;
        </a>
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
              <a class="nav-link active" aria-current="page" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link" href="projects.html">
                Projects
              </a>
            </li>
            <li>
              <a class="nav-link" href="blogs.html">
                Blogs
              </a>
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
                <a class="dropdown-item" href="certifications.html">
                  Certifications
                </a>
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
