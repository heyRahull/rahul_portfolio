import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import pic from "../images/rahul.png";
import heroImg from "../images/undraw_Updated_resume_re_q1or.svg";
import projectImg from "../images/project-image.svg";
import blogsImg from "../images/blogs_image.svg";
import certificationImg from "../images/certification-image.svg";
import htmlIcon from "../icons/html5_image.png";
import cssIcon from "../icons/css3_icon.png";
import jsIcon from "../icons/js_icon.jfif";
import nodeIcon from "../icons/nodejs1_icon.png";
import reactIcon from "../icons/react-icon.png";
import bootstrapIcon from "../icons/bootstrapicon.png";
import HostIcon from "../icons/web-hosting_icon.jpg";
import gitIcon from "../icons/git.png";
const Greet = () => (
  <>
    {/* Hero Area  */}
    <header class="hero">
      <br />
      <br />
      <img class="hero-img" src={heroImg} />
      <br />
      <br />
      <h1 class="hero-heading">
        <strong>
          HEY THERE <span class="wavy">👋🏻</span> MYSELF
          <span class="name-inverted"> RAHUL AGARWAL</span>, a
          <span class="name-inverted"> SOFTWARE DEVELOPER</span>
        </strong>
      </h1>
    </header>
    <section class="section ow">
      <div class="container container-center">
        <h1>
          <strong class="name-inverted">About Me</strong>
        </h1>
        <hr />
        <img class="rahul-image" src={pic} />
        <p>
          <strong>
            <br />
            I am a Self-taught programmer, Computer Science graduate, reader,
            and a thinker. I have completed my Bachelor's and graduated in 2021.
            I am passionate about computers from a young age and always excited
            about the impact of products of technology can have on customers.
            <br />
            <br />I am really interested into exploring the world of
            web-technology and I have done some projects from the perspective of
            figuring things out myself by tinkering different parts of projects.
            I am open to all kinds of opportunities that involve growth..
          </strong>
        </p>
      </div>
    </section>
    {/* Technologies section  */}
    <section className="section">
      <div className="container container-center">
        <h1>
          <strong className="name-inverted">Technologies</strong>
        </h1>
        <hr />
        <ul className="list-non-bullet gray-font">
          <h3>
            <strong>
              <li style={{ display: "inline" }}>HTML5 &emsp;</li>
              <img src={htmlIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>CSS3 &emsp;</li>
              <img src={cssIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>JAVASCRIPT &emsp;</li>
              <img src={jsIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>NODEJS &emsp;</li>
              <img src={nodeIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>REACTJS &emsp;</li>
              <img src={reactIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>BOOTSTRAP &emsp;</li>
              <img src={bootstrapIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>WEB HOSTING &emsp;</li>
              <img src={HostIcon} width="50" height="50" alt="" />
              <br />
              <br />
              <li style={{ display: "inline" }}>GIT &emsp;</li>
              <img src={gitIcon} width="50" height="30" alt="" />
            </strong>
          </h3>
        </ul>
      </div>
    </section>
    {/* projects section */}
    <section className="section ow">
      <div className="container container-center">
        <h1>
          <strong className="name-inverted">Projects</strong>
        </h1>
        <hr />
        <img className="image-center" src={projectImg} alt="Project Image" />
        <p>
          <strong>
            <br />I would like to showcase my work and thus, you can see my
            projects hosted online.
          </strong>
        </p>
        <Link className="link link-primary" to="/projects">
          See Projects
        </Link>
      </div>
    </section>
    {/* blogs sections */}
    <section className="section">
      <div className="container container-center">
        <h1>
          <strong className="name-inverted">Blogs</strong>
        </h1>
        <hr />
        <img className="image-center" src={blogsImg} alt="Blogs Image" />
        <p>
          <strong>
            I am also working on some technical and non-technical blogs. I like
            to document my journey of learning.
          </strong>
        </p>
        <Link className="link link-secondary" to="/blogs">
          Read Blogs
        </Link>
      </div>
    </section>

    {/* certification section */}
    <section className="section ow">
      <div className="container container-center">
        <h1>
          <strong className="name-inverted">Certifications</strong>
        </h1>
        <hr />
        <img
          className="image-center"
          src={certificationImg}
          alt="Certification Image"
        />
        <p>
          <strong>
            <br />
            Discover my accomplished certifications and explore the breadth of
            my expertise.
          </strong>
        </p>
        <a className="link link-primary" href="/certifications.html">
          Certifications
        </a>
      </div>
    </section>
  </>
);
export default Greet;
