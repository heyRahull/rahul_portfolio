import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 card_individual">
        <div className="card mb-4 shadow-sm">
          <img src={props.image} width="100%" height="225" alt={props.name} />
          <div className="card-body card-color">
            <p className="card-text excerpt">{props.excerpt}</p>
            <div className="d-flex justify-content-between align-items-center">
              <a
                className="card-btn card-primary"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
