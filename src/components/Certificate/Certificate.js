import React from "react";

const Certificate = (props) => {
  return (
    <>
      <li className={props.darkbg}>
        <article className="showcase-list container container-center">
          <h1>
            <img className="certificate_logo" src={props.logo} />
            <span>{props.name}</span>
            <span className="certification_name">({props.shortForm})</span>
          </h1>
          <small>{props.date}</small>
          <a data-toggle="modal" data-target={`.${props.shortForm}`}>
            <img className="project-image hand-cursor" src={props.image} />
          </a>
          <button
            type="button"
            className="btn btn_color"
            data-toggle="modal"
            data-target={`.${props.shortForm}`}
          >
            View Certificate
          </button>
          {/* modal  */}
          <div
            className={`modal fade ${props.shortForm} hand-cursor`}
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered arrow-cursor">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {props.name}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <img
                  src={props.image}
                  className={props.shortForm == "GCP-ACE" ? "gcpModal" : ""}
                />
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default Certificate;
