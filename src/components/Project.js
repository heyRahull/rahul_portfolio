import React from "react";

const Project = (props) => {
  return (
    <>
      <li>
        <article className="showcase-list container container-center">
          <h1>
            {props.logo && (
              <img src={props.logo} width="60px" height="40px" alt="" />
            )}

            {props.name}
          </h1>
          <small>{props.date}</small>
          <img
            className="project-image"
            src={props.image}
            alt="angelas_bootcamp"
          />
          <p>{props.detail}</p>
          <a className="link link-primary" href={props.link}>
            Live Projects
          </a>
          <a className="link link-secondary" href={props.sourceCode}>
            View Source
          </a>
        </article>
      </li>
    </>
  );
};

export default Project;
