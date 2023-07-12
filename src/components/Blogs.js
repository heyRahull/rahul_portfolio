import React from "react";
import blogsImage from "../images/blogs_image.svg";
import vanillaJs from "../images/what is vanilla js.jpg";
import reactBlog from "../images/react-blog.jpeg";
import dsaBlog from "../images/DSA_blog.png";
import introvertBlog from "../images/introvert_blog.jpeg";
import PageIntro from "./PageIntro";
import Card from "./Card.js";

const Blogs = () => {
  return (
    <>
      <PageIntro
        image={blogsImage}
        name="blogsPage"
        heading="Blogs"
        description="Writing blogs is one of the things that I do. Whenever I learn
        something new, be it technical or generic, I try to write a blog
        on it. You can explore this space to read about the various blogs
        that I have written."
      />

      <section className="section">
        <div className="col p-3 d-flex flex-column position-static card_column">
          <div className="row mx-0 my-0">
            <Card
              excerpt="Vanilla Js or Plain Js or Javascript in Browser. We might get a
              thought that why learn vanilla JavaScript when you’ve got Angular,
              React and Node.js? Well, there are several reasons for choosing
              the vanilla js to learn..."
              image={vanillaJs}
              link="https://rahulagarwal.hashnode.dev/vanilla-js-or-plain-js-or-javascript-in-browser"
              name="vanilla JS"
            />

            <Card
              excerpt="React Js is a library of Javascript. As a beginner it
              sometimes gets too tough to select from various content that
              is spread everywhere. So this blog will let you get started
              with your Reactjs journey..."
              image={reactBlog}
              link="https://rahulagarwal.hashnode.dev/creating-your-first-react-app-as-a-beginner"
              name="React Blog"
            />

            <Card
              excerpt="Data Structures are also important because, they are what
              you do after you’ve became a computer scientist. They are
              important to understand how does the code execution takes
              place inside the computer system..."
              image={dsaBlog}
              link="https://medium.com/@rahul123agarwal99/why-are-data-structures-and-algorithms-so-important-in-computer-science-8553d7dfc72b"
              name="DSA Blog"
            />

            <Card
              excerpt="The myths that people have regarding the term “introvert” is
              what bothers me more than actually being an introvert. So I
              just thought of why not sharing my opinion that How it
              actually feels about being an introvert..."
              image={introvertBlog}
              link="https://medium.com/@rahul123agarwal99/how-it-feels-like-to-be-an-introvert-c18ae086abc5"
              name="Introvert Blog"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
