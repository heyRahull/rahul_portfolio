import React from "react";
import githubIcon from "../icons/github.png";
import linkedinIcon from "../icons/Linkedin.png";
import mediumIcon from "../icons/medium.png";
import gmailIcon from "../icons/gmail1.png";

const Footer = () => (
  <>
    {/* Footer Section  */}
    <nav className="navbar navbar-dark nav-color" style={{ color: "white" }}>
      <h3 style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
        Connect with Me !
      </h3>
    </nav>
    <nav className="navbar navbar-dark nav-color">
      <div
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      >
        <a
          className="navbar-brand"
          href="https://github.com/heyrahull"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} width="30" height="30" alt="" />
        </a>
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/rahul-agarwal-806081148/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinIcon}
            width="30"
            height="30"
            alt=""
            loading="lazy"
          />
        </a>
        <a
          className="navbar-brand"
          href="https://medium.com/@rahul123agarwal99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mediumIcon} width="30" height="30" alt="" loading="lazy" />
        </a>
        <a
          className="navbar-brand"
          href="mailto:rahul123agarwal99@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmailIcon} width="30" height="27" alt="" loading="lazy" />
        </a>
      </div>
    </nav>
    <nav className="navbar navbar-dark nav-color" style={{ color: "white" }}>
      <p style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
        Customized with ❤️ by Rahul Agarwal
      </p>
    </nav>
  </>
);

export default Footer;
