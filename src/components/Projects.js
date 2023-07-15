import React from "react";
import projectImage from "../images/project-image.svg";
import webBootCamp from "../project-images/web dev bootcamp image.jpg";
import cocktailDb from "../project-images/cocktaildb.PNG";
import moviesApp from "../project-images/movies__app.PNG";
import amazonLogo from "../images/amazon-removebg-preview.png";
import amazonClone from "../project-images/amazone_clone.PNG";
import netflixLogo from "../images/Netflix-Symbol.png";
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
import bananaTalk from "../project-images/Banana_talk.PNG";
import friendsIcon from "../images/friends-image (4).png";
import friendsProject from "../images/friends.png";
import PageIntro from "./PageIntro";
import Project from "./Project";

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
      <ul className="list-non-bullet off_white_at_odd">
        <Project
          name="🖥️ Web developer Bootcamp Assignments"
          date="September, 2022"
          image={webBootCamp}
          alt="angelas_bootcamp_iamge"
          detail="While attending the Web developer bootcamp by Angela Yu, I have
          completed several assignments as capstone projects."
          link="#"
        />

        <Project
          name="🍷 Cocktail Db App"
          date="May, 2021"
          image={cocktailDb}
          alt="cocktail_project_iamge"
          detail="This is a Cocktail Db app built in React.js that displays cocktail
          images and provides information about each image. The cocktails
          are fetched and displayed using TheCocktailDB API. I learned
          concepts such as context API, PureJS, React, and CSS while
          building this project."
          link="https://cocktail-db-app.netlify.app/"
          sourceCode="https://github.com/heyRahull/Cocktauil-Db"
        />

        <Project
          name="🎥 Movies App"
          date="May, 2021"
          image={moviesApp}
          alt="movies_project_iamge"
          detail="This is a Movies app built in React.js that displays movie posters
          and provides an overview of the movies. The movies are fetched and
          displayed using the TMDB API. I learned some PureJS and CSS
          concepts while building this project."
          link="https://movies-app-rahul.netlify.app/"
          sourceCode="https://github.com/heyRahull/movies-app"
        />

        <Project
          logo={amazonLogo}
          name=" Amazon Clone"
          date="May, 2021"
          image={amazonClone}
          alt="amazon_project_iamge"
          detail="This is a clone app of the Amazon Ecommerce Application. It is
          built using React.js and Firebase. It utilizes React Router to
          render different pages, and it also uses Context API and User
          Authentication. The aim of building this app is to understand the
          different components of an Ecommerce site."
          link="https://clone-3d1bc.web.app/"
          sourceCode="https://github.com/heyRahull/Amazon-Clone"
        />

        <Project
          name="Netflix Frontend Clone"
          date="May, 2021"
          logo={netflixLogo}
          image={netflixClone}
          alt="netflix_project_iamge"
          detail="This is a clone app for the frontend of Netflix. It is built using
          React.js and Firebase. It makes use of TMDB API, Firestore
          (database), and Material-UI."
          link="https://netflix-frontend-f0d8b.web.app/"
          sourceCode="https://github.com/heyRahull/Netflix-frontend"
        />

        <Project
          name=" Messenger Clone"
          date="April, 2021"
          logo={messangerLogo}
          image={messangerClone}
          alt="messanger_project_iamge"
          detail="This is a clone app of the Messenger Chat Application. It is built
          using React.js and Firebase. It makes use of Firestore (database)
          and Material-UI. The aim of building this app is to understand how
          a chat app works."
          link="https://messanger-clone-60be2.web.app/"
          sourceCode="https://github.com/heyRahull/Messanger-Clone"
        />

        <Project
          name=" EverNote Clone"
          date="April, 2021"
          logo={evernoteLogo}
          image={evernoteClone}
          alt="evernote_project_iamge"
          detail="This is a clone app of Evernote. It is built using React.js and
          Firebase. It makes use of Firestore (database), ReactQuill, and
          Material-UI."
          link="https://evernote-clone-f5f5b.web.app/"
          sourceCode="https://github.com/heyRahull/Evernote-clone"
        />

        <Project
          name="🖼️ Picsogram App 🖼️"
          date="March, 2021"
          image={picsogram}
          alt="picsogram_project_iamge"
          detail="This is an app similar to Instagram. It is built using React.js
          and Firebase. It makes use of storage, Firestore (database), and
          authentication from Firebase."
          link="https://instagram-clone-f5d3a.web.app/"
          sourceCode="https://github.com/heyRahull/picsogram_app"
        />

        <Project
          name="📝 ToDo List App 📝"
          date="March, 2021"
          image={todoApp}
          alt="todoList_project_iamge"
          detail="You can record all your TODOs using this app. This app has the
          functionality of adding, deleting, and reading tasks. I have used
          Firebase as the backend for this app."
          link="https://todo-app-e6f8a.web.app/"
          sourceCode="https://github.com/heyRahull/todo-app-firebase"
        />

        <Project
          name="🌟 Movies Rating App 🌟"
          date="February, 2020"
          image={movieRating}
          alt="moviesRating_project_iamge"
          detail="Do you watch movies? You will find some good recommendations for
          different genres. Made using ReactJS with ❤️"
          link="https://tf33c.csb.app/"
          sourceCode="https://github.com/heyRahull/MovieRating_App"
        />

        <Project
          name="😃 Emojipedia 😃"
          date="January, 2021"
          image={emojipedia}
          alt="emojipedia_project_iamge"
          detail="I struggle with understanding the emojis. Do you too? If yes, then
          see this library of emojis with meaning."
          link="https://mqyn9.csb.app/"
          sourceCode="https://github.com/heyRahull/EmojiInterpreterApp"
        />

        <Project
          name=" Yoda Speak"
          date="January, 2021"
          image={yodaTranslator}
          logo={yodaIcon}
          alt="yodaSpeak_project_iamge"
          detail="Convert from English to Yoda speak. Yoda is a fictional character
          in the Star Wars universe. He is a small, green humanoid alien who
          is powerful with the Force. He has his own language, Yoda often
          orders sentences as Object-Subject-Verb!"
          link="https://yoda-translator-app.netlify.app/"
          sourceCode="https://github.com/heyRahull/Yoda-Translator-App"
        />

        <Project
          name=" Banana Translator"
          date="January, 2021"
          image={bananaTalk}
          logo={minion1}
          alt="minion_project_iamge"
          detail="Are you a fan of minions? Did you know that the gibberish they say
          is an actual language? Use this translator app built using
          translation API to convert your text from English to Minion speak
          or Banana language."
          link="https://minion-language-app.netlify.app/"
          sourceCode="https://github.com/heyRahull/Banana_translator_app"
        />

        <Project
          name=" Are you a real F.R.I.E.N.D.S fan?"
          date="December, 2020"
          image={friendsProject}
          logo={friendsIcon}
          alt="friends_image"
          detail="Are you also a fan of F.R.I.E.N.D.S series like me? Let's play a
          quiz and see."
          link="https://replit.com/@rahulagarwal99/FavSeriesQuiz?embed=1&output=1"
          sourceCode="https://github.com/heyRahull/Favorite_Series_Quiz"
        />

        <Project
          name="👦 How well do you know Me? 👦"
          date="December, 2020"
          alt="image"
          detail="A CLI app built with <strong>nodeJS</strong>. You can send this to
          your friends and find out who really knows you well."
          link="https://replit.com/@rahulagarwal99/AboutMeQuiz?embed=1&output=1"
          sourceCode="https://github.com/heyRahull/About_Me_Quiz"
        />
      </ul>
    </>
  );
};

export default Projects;
