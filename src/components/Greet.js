import React from "react";
import "./styles.css";
// import Navbar from "./Navbar";
import pic from "../images/rahul_image.jpg";
import heroImg from "../images/undraw_Updated_resume_re_q1or.svg";
const Greet = () => (
  <>
    {/* <Navbar /> */}
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
          <span class="name-inverted">RAHUL AGARWAL</span>, a
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
            I am open to all kinds of opportunities that involve growth.
          </strong>
        </p>
      </div>
    </section>
  </>
);
export default Greet;
