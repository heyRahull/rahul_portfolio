import React from "react";
import ShareButtons from "./ShareButtons";

const PageIntro = (props) => {
  return (
    <>
      <section className="section">
        <div className="container container-center">
          <br />
          <br />
          <br />
          <h1
            className={`${
              props.name == "certicicationPage" ? "certification_heading" : ""
            }`}
          >
            <strong className="name-inverted">{props.heading}</strong>
          </h1>
          <hr />
          <img
            className={`image-center  ${
              props.name == "certicicationPage" ? "certification_img" : ""
            }`}
            src={props.image}
            alt={props.name}
          />
          <br />
          <p>
            <strong>{props.description}</strong>
          </p>
        </div>
        <ShareButtons />
      </section>
      <hr />
    </>
  );
};

export default PageIntro;
