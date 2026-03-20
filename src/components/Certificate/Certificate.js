import React from "react";

const Certificate = (props) => {
  const modalId = `modal-${props.id}`;
  return (
    <>
      <li className={props.darkbg}>
        <article className="showcase-list container container-center">
          <h1>
            {props.logo && (
              <img className="certificate_logo" src={props.logo} alt="certificate logo" />
            )}
            <span>{props.name}</span>
            {props.shortForm && (
              <span className="certification_name">({props.shortForm})</span>
            )}
          </h1>
          <small>{props.date}</small>
          <a data-toggle="modal" data-target={`#${modalId}`}>
            <img className="project-image hand-cursor" src={props.image} alt="certificate image"/>
          </a>
          <button
            type="button"
            className="btn btn_color"
            data-toggle="modal"
            data-target={`#${modalId}`}
          >
            View Certificate
          </button>
          {/* modal  */}
          <div
            className={`modal fade hand-cursor`}
            tabindex="-1"
            id={modalId}
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
