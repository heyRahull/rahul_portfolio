import React from "react";
import certificationImg from "../images/certification-image.svg";
import az104_logo from "../certificate-images/az104_logo.png";
import az104Image from "../certificate-images/az-104.jpg";

const Certifications = () => {
  return (
    <>
      <section className="section">
        <div className="container container-center">
          <br />
          <br />
          <br />
          <h2 style={{ textAlign: "center" }}>
            <strong className="name-inverted">MY CERTIFICATES</strong>
          </h2>
          <hr />
          <img
            className="image-center certification_img"
            src={certificationImg}
            alt="Certificates"
          />
          <br />
          <p>
            <strong>
              Explore the comprehensive collection of certifications I have
              earned, showcasing my dedication to personal and professional
              growth.
            </strong>
          </p>
        </div>
      </section>
      <hr />
      <ul class="list-non-bullet">
        {/* az104 certificate  */}
        <li>
          <article className="showcase-list container container-center">
            <h1>
              <img className="certificate_logo" src={az104_logo} alt="" />
              Microsoft Certified : <br />
              Azure Associate
              <span className="certification_name">(Az-104)</span>
            </h1>
            <small>June, 2023</small>
            <a data-toggle="modal" data-target=".az104">
              <img
                className="project-image"
                src={az104Image}
                alt="AZ-104 Certificate"
              />
            </a>
            <button
              type="button"
              className="btn btn_color"
              data-toggle="modal"
              data-target=".az104"
            >
              View Certificate
            </button>
            {/* modal  */}
            <div
              class="modal fade az104"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Azure Associate Administrator (AZ-104)
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
                  <img src={az104Image} alt="AZ-104 Certificate" />
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </>
  );
};

export default Certifications;
