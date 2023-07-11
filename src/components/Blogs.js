import React from "react";
import blogsImage from "../images/blogs_image.svg";
import vanillaJs from "../images/what is vanilla js.jpg";
import reactBlog from "../images/react-blog.jpeg";
import dsaBlog from "../images/DSA_blog.png";
import introvertBlog from "../images/introvert_blog.jpeg";
import PageIntro from "./PageIntro";

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
            <div className="col-md-4 card_individual">
              <div className="card mb-4 shadow-sm">
                <img
                  src={vanillaJs}
                  width="100%"
                  height="225"
                  alt="Vanilla JS"
                />
                <div className="card-body card-color">
                  <p className="card-text excerpt">
                    Vanilla Js or Plain Js or Javascript in Browser. We might
                    get a thought that why learn vanilla JavaScript when you’ve
                    got Angular, React and Node.js? Well, there are several
                    reasons for choosing the vanilla js to learn...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      className="card-btn card-primary"
                      href="https://rahulagarwal.hashnode.dev/vanilla-js-or-plain-js-or-javascript-in-browser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 card_individual">
              <div className="card mb-4 shadow-sm">
                <img
                  src={reactBlog}
                  width="100%"
                  height="225"
                  alt="React Blog"
                />
                <div className="card-body card-color">
                  <p className="card-text excerpt">
                    React Js is a library of Javascript. As a beginner it
                    sometimes gets too tough to select from various content that
                    is spread everywhere. So this blog will let you get started
                    with your Reactjs journey...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      className="card-btn card-primary"
                      href="https://rahulagarwal.hashnode.dev/creating-your-first-react-app-as-a-beginner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 card_individual">
              <div className="card mb-4 shadow-sm">
                <img src={dsaBlog} width="100%" height="225" alt="DSA Blog" />
                <div className="card-body card-color">
                  <p className="card-text excerpt">
                    Data Structures are also important because, they are what
                    you do after you’ve became a computer scientist. They are
                    important to understand how does the code execution takes
                    place inside the computer system...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      className="card-btn card-primary"
                      href="https://medium.com/@rahul123agarwal99/why-are-data-structures-and-algorithms-so-important-in-computer-science-8553d7dfc72b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 card_individual">
              <div className="card mb-4 shadow-sm">
                <img
                  src={introvertBlog}
                  width="100%"
                  height="225"
                  alt="Introvert Blog"
                />
                <div className="card-body card-color">
                  <p className="card-text excerpt">
                    The myths that people have regarding the term “introvert” is
                    what bothers me more than actually being an introvert. So I
                    just thought of why not sharing my opinion that How it
                    actually feels about being an introvert...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      className="card-btn card-primary"
                      href="https://medium.com/@rahul123agarwal99/how-it-feels-like-to-be-an-introvert-c18ae086abc5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
