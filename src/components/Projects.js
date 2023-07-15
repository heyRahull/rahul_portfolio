import React from "react";
import projectImage from "../images/project-image.svg";
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
import projectData from "./projectData.js";

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
        {projectData.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            date={project.date}
            logo={project.logo}
            image={project.image}
            alt={project.alt}
            detail={project.detail}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))}

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
