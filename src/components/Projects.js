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
import picsogram from "../project-images/picsogram.PNG";
import todoApp from "../project-images/todo_app.PNG";
import movieRating from "../project-images/movie_rating_app.PNG";
import emojipedia from "../project-images/emoji_interpreter.PNG";
import yodaIcon from "../images/Yoda Image 1.png";
import yodaTranslator from "../project-images/yoda_translator.PNG";
import minion1 from "../images/minion-yellow.png";
import minion2 from "../images/minion-transparent-background-23.png";
import bananaTalk from "../project-images/Banana_talk.PNG";
import friendsIcon from "../images/friends-image (4).png";
import PageIntro from "./PageIntro";

const Projects = () => {
  return (
    <>
      <PageIntro
        image={projectImage}
        name="projectsPage"
        heading="MY PROJECTS"
        description="You can see live implementation as well as source of some of the
        projects that I have made as a part of my learning and
        experimenting with different tech stack."
      />
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

        <li>
          <article className="showcase-list container container-center">
            <h1>🖼️ Picsogram App 🖼️</h1>
            <small>March, 2021</small>
            <img
              className="project-image"
              src={picsogram}
              alt="picsogram image"
            />
            <p>
              This is an app similar to Instagram. It is built using React.js
              and Firebase. It makes use of storage, Firestore (database), and
              authentication from Firebase.
            </p>

            <a
              className="link link-primary"
              href="https://instagram-clone-f5d3a.web.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/picsogram_app"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>📝 ToDo List App 📝</h1>
            <small>March, 2021</small>
            <img className="project-image" src={todoApp} alt="Todo app image" />
            <p>
              You can record all your TODOs using this app. This app has the
              functionality of adding, deleting, and reading tasks. I have used
              Firebase as the backend for this app.
            </p>

            <a
              className="link link-primary"
              href="https://todo-app-e6f8a.web.app/"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/todo-app-firebase"
            >
              View Source
            </a>
          </article>
        </li>

        <li>
          <article className="showcase-list container container-center">
            <h1>🌟 Movies Rating App 🌟</h1>
            <small>February, 2020</small>
            <img
              className="project-image"
              src={movieRating}
              alt="movie rating app image"
            />
            <p>
              Do you watch movies? You will find some good recommendations for
              different genres. Made using ReactJS with ❤️
            </p>

            <a className="link link-primary" href="https://tf33c.csb.app/">
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/MovieRating_App"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>😃 Emojipedia 😃</h1>
            <small>January, 2021</small>
            <img
              className="project-image"
              src={emojipedia}
              alt="emoji interpretor image"
            />
            <p>
              I struggle with understanding the emojis. Do you too? If yes, then
              see this library of emojis with meaning.
            </p>

            <a className="link link-primary" href="https://mqyn9.csb.app/">
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/EmojiInterpreterApp"
            >
              View Source
            </a>
          </article>
        </li>

        <li>
          <article className="showcase-list container container-center">
            <h1>
              <img src={yodaIcon} width="60" height="60" alt="" />
              Yoda Speak
              <img src={yodaIcon} width="60" height="60" alt="" />
            </h1>
            <small>January, 2021</small>
            <img
              className="project-image"
              src={yodaTranslator}
              alt="yoda translator image"
            />
            <p>
              Convert from English to Yoda speak. Yoda is a fictional character
              in the Star Wars universe. He is a small, green humanoid alien who
              is powerful with the Force. He has his own language, Yoda often
              orders sentences as Object-Subject-Verb!
            </p>

            <a
              className="link link-primary"
              href="https://yoda-translator-app.netlify.app/"
              target="_blank"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Yoda-Translator-App"
              target="_blank"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>
              <img src={minion1} width="60" height="60" alt="" />
              Banana Translator
              <img src={minion2} width="60" height="60" alt="" />
            </h1>
            <small>January, 2021</small>
            <img
              className="project-image"
              src={bananaTalk}
              alt="Banana Talk img"
            />
            <p>
              Are you a fan of minions? Did you know that the gibberish they say
              is an actual language? Use this translator app built using
              translation API to convert your text from English to Minion speak
              or Banana language.
            </p>

            <a
              className="link link-primary"
              href="https://minion-language-app.netlify.app/"
              target="_blank"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Banana_translator_app"
              target="_blank"
            >
              View Source
            </a>
          </article>
        </li>

        <li>
          <article className="showcase-list container container-center">
            <h1>
              Are you a real F.R.I.E.N.D.S fan?
              <img src={friendsIcon} width="200" height="80" alt="" />
            </h1>
            <small>December, 2020</small>
            <p>
              Are you also a fan of F.R.I.E.N.D.S series like me? Let's play a
              quiz and see.
            </p>

            <a
              className="link link-primary"
              href="https://replit.com/@rahulagarwal99/FavSeriesQuiz?embed=1&output=1"
              target="_blank"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/Favorite_Series_Quiz"
              target="_blank"
            >
              View Source
            </a>
          </article>
        </li>

        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>👦 How well do you know Me? 👦</h1>
            <small>December, 2020</small>
            <p>
              A CLI app built with <strong>nodeJS</strong>. You can send this to
              your friends and find out who really knows you well.
            </p>

            <a
              className="link link-primary"
              href="https://replit.com/@rahulagarwal99/AboutMeQuiz?embed=1&output=1"
              target="_blank"
            >
              Live Project
            </a>
            <a
              className="link link-secondary"
              href="https://github.com/heyRahull/About_Me_Quiz"
              target="_blank"
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
