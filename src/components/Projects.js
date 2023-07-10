import React from "react";
import projectImage from "../images/project-image.svg";
import webBootCamp from "../project-images/web dev bootcamp image.jpg";
import cocktailDb from "../project-images/cocktaildb.PNG";
import moviesApp from "../project-images/movies__app.PNG";
import amazonLogo from "../images/amazon-removebg-preview.png";
import amazonClone from "../project-images/amazone_clone.PNG";
import netflixLogo from "../images/Netflix logo.png";
import netflixClone from "../project-images/Netflix_clone.PNG";
import messangerLogo from "../images/messanger-image.png";
import messangerClone from "../project-images/Messanger_clone.PNG";
import evernoteLogo from "../images/Evernote-image.png";
import evernoteClone from "../project-images/evernote_project.PNG";

const Projects = () => {
  return (
    <>
      <section className="section">
        <div className="container container-center">
          <br />
          <br />
          <br />
          <h1>
            <strong className="name-inverted">MY PROJECTS</strong>
          </h1>
          <hr />
          <img className="image-center" src={projectImage} />
          <br />
          <p>
            <strong>
              You can see live implementation as well as source of some of the
              projects that I have made as a part of my learning and
              experimenting with different tech stack.
            </strong>
          </p>
        </div>
      </section>
      <hr />

      <ul className="list-non-bullet">
        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>🖥️ Web developer Bootcamp Assignments</h1>
            <small>September, 2022</small>
            <img
              className="project-image"
              src={webBootCamp}
              alt="angelas_bootcamp"
            />
            <p>
              While attending the Web developer bootcamp by Angela Yu, I have
              completed several assignments as capstone projects.
            </p>
            <a className="link link-primary" href="angela.html">
              Live Projects
            </a>
          </article>
        </li>

        <li>
          <article className="showcase-list container container-center">
            <h1>🍷 Cocktail Db App</h1>
            <small>May, 2021</small>
            <img className="project-image" src={cocktailDb} alt="movies__app" />
            <p>
              This is a Cocktail Db app built in React.js that displays cocktail
              images and provides information about each image. The cocktails
              are fetched and displayed using TheCocktailDB API. I learned
              concepts such as context API, PureJS, React, and CSS while
              building this project.
            </p>

            <a
              className="link link-primary"
              href="https://cocktail-db-app.netlify.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Cocktauil-Db"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>🎥 Movies App</h1>
            <small>May, 2021</small>
            <img className="project-image" src={moviesApp} alt="movies__app" />
            <p>
              This is a Movies app built in React.js that displays movie posters
              and provides an overview of the movies. The movies are fetched and
              displayed using the TMDB API. I learned some PureJS and CSS
              concepts while building this project.
            </p>

            <a
              className="link link-primary"
              href="https://movies-app-rahul.netlify.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/movies-app"
            >
              View Source
            </a>
          </article>
        </li>

        <li>
          <article className="showcase-list container container-center">
            <h1>
              <img src={amazonLogo} width="60" height="60" alt="" />
              Amazon Clone
            </h1>
            <small>May, 2021</small>
            <img
              className="project-image"
              src={amazonClone}
              alt="amazone_clone"
            />
            <p>
              This is a clone app of the Amazon Ecommerce Application. It is
              built using React.js and Firebase. It utilizes React Router to
              render different pages, and it also uses Context API and User
              Authentication. The aim of building this app is to understand the
              different components of an Ecommerce site.
            </p>

            <a
              className="link link-primary"
              href="https://clone-3d1bc.web.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Amazon-Clone"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>
              <img src={netflixLogo} width="60" height="40" alt="" />
              Netflix Frontend Clone
            </h1>
            <small>May, 2021</small>
            <img
              className="project-image"
              src={netflixClone}
              alt="netflix_clone"
            />
            <p>
              This is a clone app for the frontend of Netflix. It is built using
              React.js and Firebase. It makes use of TMDB API, Firestore
              (database), and Material-UI.
            </p>

            <a
              className="link link-primary"
              href="https://netflix-frontend-f0d8b.web.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Netflix-frontend"
            >
              View Source
            </a>
          </article>
        </li>

        <li>
          <article className="showcase-list container container-center">
            <h1>
              <img src={messangerLogo} width="60" height="60" alt="" />
              Messenger Clone
            </h1>
            <small>April, 2021</small>
            <img
              className="project-image"
              src={messangerClone}
              alt="Messenger_clone"
            />
            <p>
              This is a clone app of the Messenger Chat Application. It is built
              using React.js and Firebase. It makes use of Firestore (database)
              and Material-UI. The aim of building this app is to understand how
              a chat app works.
            </p>

            <a
              className="link link-primary"
              href="https://messanger-clone-60be2.web.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Messanger-Clone"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>
              <img src={evernoteLogo} width="60" height="60" alt="" />
              EverNote Clone
            </h1>
            <small>April, 2021</small>
            <img
              className="project-image"
              src={evernoteClone}
              alt="evernote project image"
            />
            <p>
              This is a clone app of Evernote. It is built using React.js and
              Firebase. It makes use of Firestore (database), ReactQuill, and
              Material-UI.
            </p>

            <a
              className="link link-primary"
              href="https://evernote-clone-f5f5b.web.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Evernote-clone"
            >
              View Source
            </a>
          </article>
        </li>
      </ul>
    </>
  );
};

export default Projects;
