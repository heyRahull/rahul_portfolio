const projectData = [
  {
    name: "🗒️ Todo List - Add Delete Functionality",
    date: "April, 2024",
    image: require("../../project-images/todoAddDelete.png"),
    alt: "app_image",
    detail:
      "I've created a todo list project with add and delete functionality. Easily mark tasks as completed and view them in a separate section for efficient task management.",
    link: "https://todo-sigma-liard.vercel.app/",
    sourceCode: "https://github.com/heyRahull/todo",
  },
  {
    name: "🖥️ Video Streaming Platform",
    date: "March, 2024",
    image: require("../../project-images/yt.png"),
    alt: "app_image",
    detail:
      "The application is developed from scratch using ReactJS, Redux, Tailwind CSS, MaterialUI, React Router DOM, and data integrated with APIs. It's a robust, scalable, and industry-level application designed to deliver a seamless video-sharing experience. From dynamic content delivery to personalized suggestions.",
    link: "https://yt-app-rahul.netlify.app/",
    sourceCode: "https://github.com/heyRahull/yt-clone",
  },
  {
    name: "🖥️ Web developer Bootcamp Assignments",
    date: "September, 2022",
    image: require("../../project-images/web dev bootcamp image.jpg"),
    alt: "angelas_bootcamp_image",
    detail:
      "While attending the Web developer bootcamp by Angela Yu, I have completed several assignments as capstone projects.",
    link: "#",
  },
  {
    name: "🍷 Cocktail Db App",
    date: "May, 2021",
    image: require("../../project-images/cocktaildb.PNG"),
    alt: "cocktail_project_image",
    detail:
      "This is a Cocktail Db app built in React.js that displays cocktail images and provides information about each image. The cocktails are fetched and displayed using TheCocktailDB API. I learned concepts such as context API, PureJS, React, and CSS while building this project.",
    link: "https://cocktail-db-app.netlify.app/",
    sourceCode: "https://github.com/heyRahull/Cocktauil-Db",
  },
  {
    name: "🎥 Movies App",
    date: "May, 2021",
    image: require("../../project-images/movies__app.PNG"),
    alt: "movies_project_image",
    detail:
      "This is a Movies app built in React.js that displays movie posters and provides an overview of the movies. The movies are fetched and displayed using the TMDB API. I learned some PureJS and CSS concepts while building this project.",
    link: "https://movies-app-rahul.netlify.app/",
    sourceCode: "https://github.com/heyRahull/movies-app",
  },
  {
    logo: require("../../images/amazon-removebg-preview.png"),
    name: " Amazon Clone",
    date: "May, 2021",
    image: require("../../project-images/amazone_clone.PNG"),
    alt: "amazon_project_image",
    detail:
      "This is a clone app of the Amazon Ecommerce Application. It is built using React.js and Firebase. It utilizes React Router to render different pages, and it also uses Context API and User Authentication. The aim of building this app is to understand the different components of an Ecommerce site.",
    link: "https://clone-3d1bc.web.app/",
    sourceCode: "https://github.com/heyRahull/Amazon-Clone",
  },
  {
    logo: require("../../images/Netflix-Symbol.png"),
    name: "Netflix Frontend Clone",
    date: "May, 2021",

    image: require("../../project-images/Netflix_clone.PNG"),
    alt: "netflix_project_image",
    detail:
      "This is a clone app for the frontend of Netflix. It is built using React.js and Firebase. It makes use of TMDB API, Firestore (database), and Material-UI.",
    link: "https://netflix-frontend-f0d8b.web.app/",
    sourceCode: "https://github.com/heyRahull/Netflix-frontend",
  },
  {
    name: " Messenger Clone",
    date: "April, 2021",
    logo: require("../../images/messanger-image.png"),
    image: require("../../project-images/Messanger_clone.PNG"),
    alt: "messanger_project_image",
    detail:
      "This is a clone app of the Messenger Chat Application. It is built using React.js and Firebase. It makes use of Firestore (database) and Material-UI. The aim of building this app is to understand how a chat app works.",
    link: "https://messanger-clone-60be2.web.app/",
    sourceCode: "https://github.com/heyRahull/Messanger-Clone",
  },
  {
    name: " EverNote Clone",
    date: "April, 2021",
    logo: require("../../images/Evernote-image.png"),
    image: require("../../project-images/evernote_project.PNG"),
    alt: "evernote_project_image",
    detail:
      "This is a clone app of Evernote. It is built using React.js and Firebase. It makes use of Firestore (database), ReactQuill, and Material-UI.",
    link: "https://evernote-clone-f5f5b.web.app/",
    sourceCode: "https://github.com/heyRahull/Evernote-clone",
  },
  {
    name: "🖼️ Picsogram App 🖼️",
    date: "March, 2021",
    image: require("../../project-images/picsogram.PNG"),
    alt: "picsogram_project_image",
    detail:
      "This is an app similar to Instagram. It is built using React.js and Firebase. It makes use of storage, Firestore (database), and authentication from Firebase.",
    link: "https://instagram-clone-f5d3a.web.app/",
    sourceCode: "https://github.com/heyRahull/picsogram_app",
  },
  {
    name: "📝 ToDo List App 📝",
    date: "March, 2021",
    image: require("../../project-images/todo_app.PNG"),
    alt: "todoList_project_image",
    detail:
      "You can record all your TODOs using this app. This app has the functionality of adding, deleting, and reading tasks. I have used Firebase as the backend for this app.",
    link: "https://todo-app-e6f8a.web.app/",
    sourceCode: "https://github.com/heyRahull/todo-app-firebase",
  },
  {
    name: "🌟 Movies Rating App 🌟",
    date: "February, 2020",
    image: require("../../project-images/movie_rating_app.PNG"),
    alt: "moviesRating_project_image",
    detail:
      "Do you watch movies? You will find some good recommendations for different genres. Made using ReactJS with ❤️",
    link: "https://tf33c.csb.app/",
    sourceCode: "https://github.com/heyRahull/MovieRating_App",
  },
  {
    name: "😃 Emojipedia 😃",
    date: "January, 2021",
    image: require("../../project-images/emoji_interpreter.PNG"),
    alt: "emojipedia_project_image",
    detail:
      "I struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.",
    link: "https://mqyn9.csb.app/",
    sourceCode: "https://github.com/heyRahull/EmojiInterpreterApp",
  },
  {
    name: " Yoda Speak",
    date: "January, 2021",
    image: require("../../project-images/yoda_translator.PNG"),
    logo: require("../../images/Yoda Image 1.png"),
    alt: "yodaSpeak_project_iamge",
    detail:
      "Convert from English to Yoda speak. Yoda is a fictional character in the Star Wars universe. He is a small, green humanoid alien who is powerful with the Force. He has his own language, Yoda often orders sentences as Object-Subject-Verb!",
    link: "https://yoda-translator-app.netlify.app/",
    sourceCode: "https://github.com/heyRahull/Yoda-Translator-App",
  },
  {
    name: " Banana Translator",
    date: "January, 2021",
    image: require("../../project-images/Banana_talk.PNG"),
    logo: require("../../images/minion-yellow.png"),
    alt: "minion_project_iamge",
    detail:
      "Are you a fan of minions? Did you know that the gibberish they say is an actual language? Use this translator app built using translation API to convert your text from English to Minion speak or Banana language.",
    link: "https://minion-language-app.netlify.app/",
    sourceCode: "https://github.com/heyRahull/Banana_translator_app",
  },
  {
    name: " Are you a real F.R.I.E.N.D.S fan?",
    date: "December, 2020",
    image: require("../../images/friends.png"),
    logo: require("../../images/friends-image (4).png"),
    alt: "friends_image",
    detail:
      "Are you also a fan of F.R.I.E.N.D.S series like me? Let's play a quiz and see.",
    link: "https://replit.com/@rahulagarwal99/FavSeriesQuiz?embed:1&output=1",
    sourceCode: "https://github.com/heyRahull/Favorite_Series_Quiz",
  },
  {
    name: "👦 How well do you know Me? 👦",
    date: "December, 2020",
    alt: "image",
    detail:
      "A CLI app built with <strong>nodeJS</strong>. You can send this to your friends and find out who really knows you well.",
    link: "https://replit.com/@rahulagarwal99/AboutMeQuiz?embed=1&output=1",
    sourceCode: "https://github.com/heyRahull/About_Me_Quiz",
  },
];

export default projectData;
