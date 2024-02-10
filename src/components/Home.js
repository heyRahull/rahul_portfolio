import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import pic from "../images/rahul.png";
import heroImg from "../images/undraw_Updated_resume_re_q1or.svg";
import projectImg from "../images/project-image.svg";
import blogsImg from "../images/blogs_image.svg";
import certificationImg from "../images/certification-image.svg";
import YoutubeImage from "../images/youtubeTutorial.png";
import htmlIcon from "../icons/html5_image.png";
import cssIcon from "../icons/css3_icon.png";
import jsIcon from "../icons/js_icon.jfif";
import nodeIcon from "../icons/nodejs1_icon.png";
import reactIcon from "../icons/react-icon.png";
import bootstrapIcon from "../icons/bootstrapicon.png";
import HostIcon from "../icons/web-hosting_icon.jpg";
import gitIcon from "../icons/git.png";
import ShareButtons from "./ShareButtons";
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
          {/* <strong> */}
          <br />
          👋 Hi there! I'm a self-taught programmer, content creator and
          Computer Science engineer based in India, currently leveraging my
          skills as a software engineer at Tata Consultancy Services.
          <br />
          <br /> 💻 With a passion for continuous learning, I expore a diverse
          range of technologies including frontend & designing tools like
          React.js, HTML, CSS and JS. Proficient in languages such as C++,
          Python, and JavaScript, I specialize in OOP, Data Structures,
          Algorithms, and Software Engineering. Having experience working on
          Salesforce CRM, SAP BASIS, SAP Solution Manager.
          <br />
          <br />
          🧠 Beyond implementation, I possess a strong mathematical and
          intuitive understanding of Computer Science concepts, including Cloud
          Computing and Artificial Intelligence.
          <br />
          <br />
          🛠️ My experience spans system integrations, defect analysis,
          prevention, and fixing, with a focus on SaaS solutions within the
          retail domain. I have a track record of success in talent development
          software, programming, consultation, integration, and support. I'm
          experienced with collaboration and design tools like Miro,
          streamlining processes and enhancing team productivity.
          <br />
          <br />
          ⚙️ Proficient in Azure Integration Services, Microsoft applications
          (Office 365), and Agile Methodology (Scrum, Kanban), I'm adept at
          using tools like Jira, Confluence, and Miro to streamline processes
          and drive efficiency.
          <br />
          <br />
          📚 When I'm not coding, you'll find me immersed in books or indulging
          in binge-worthy shows. I thrive in collaborative environments and
          excel in troubleshooting technical issues, ensuring security and
          compliance requirements are met.
          <br />
          <br />
          🚀 I'm always open to new opportunities that foster growth and allow
          me to contribute my expertise. For me, work is my stage, and every
          project is a performance. I bring my A-game, dedicating my 100% to
          make sure the applause is well-earned."
          {/* </strong> */}
        </p>
      </div>
      <ShareButtons />
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
          className="image-center certification_img"
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
        <Link className="link link-primary" to="/certifications">
          Certifications
        </Link>
      </div>
    </section>

    <section className="section ">
      <div className="container container-center">
        <h1>
          <strong className="name-inverted">YouTube</strong>
        </h1>
        <hr />
        <img className="image-center" src={YoutubeImage} alt="Youtube Image" />
        <p>
          <strong>
            <br />
            As a passionate educator and coding enthusiast, my YouTube channel
            is dedicated to creating engaging and informative coding tutorials
            that cater to learners of all levels.
          </strong>
        </p>
        <Link className="link link-primary" to="/certifications">
          YouTube 🎬
        </Link>
      </div>
    </section>
  </>
);
export default Greet;
