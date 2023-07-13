import React from "react";

const Project = () => {
  return (
    <>
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
    </>
  );
};

export default Project;
