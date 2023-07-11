import React from "react";
import certificationImg from "../images/certification-image.svg";
import az104_logo from "../certificate-images/az104_logo.png";
import az104Image from "../certificate-images/az-104.jpg";
import gcp_logo from "../certificate-images/GCP-ACE_logo.png";
import gcpImage from "../certificate-images/gcp_ace.jpg";
import ai900_logo from "../certificate-images/ai900_logo.png";
import ai900Image from "../certificate-images/ai-900.jpg";
import dp900_logo from "../certificate-images/dp900_logo.png";
import dp900Image from "../certificate-images/dp-900.jpg";
import az900_logo from "../certificate-images/az900_logo.png";
import az900Image from "../certificate-images/az-900.jpg";

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
              <span> Microsoft Certified : Azure Associate </span>
              <span className="certification_name">(Az-104)</span>
            </h1>
            <small>June, 2023</small>
            <a data-toggle="modal" data-target=".az104">
              <img
                className="project-image hand-cursor"
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
              class="modal fade az104 hand-cursor"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered arrow-cursor">
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

        {/* GCP Certificate  */}
        <li class="ow">
          <article className="showcase-list container container-center">
            <h1>
              <img className="certificate_logo" src={gcp_logo} alt="" />
              <span> Google Certified : Associate Cloud Engineer </span>
              <span className="certification_name">(GCP-ACE)</span>
            </h1>
            <small>May, 2023</small>
            <a data-toggle="modal" data-target=".gcpAce">
              <img
                className="project-image hand-cursor"
                src={gcpImage}
                alt="GCP Certificate"
              />
            </a>
            {/* modal  */}
            <button
              type="button"
              className="btn btn_color"
              data-toggle="modal"
              data-target=".gcpAce"
            >
              View Certificate
            </button>

            <div
              class="modal fade gcpAce hand-cursor"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered arrow-cursor">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Google Certified : Associate Cloud Engineer
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
                    src={gcpImage}
                    style={{ height: "460px" }}
                    alt="GCP Certificate"
                  />
                </div>
              </div>
            </div>
          </article>
        </li>

        {/* ai900 certification  */}
        <li>
          <article className="showcase-list container container-center">
            <h1>
              <img className="certificate_logo" src={ai900_logo} alt="" />
              <span>
                {" "}
                Microsoft Certified : <br />
                AI Fundamentals{" "}
              </span>
              <span className="certification_name">(AI-900)</span>
            </h1>
            <small>September, 2021</small>
            <a data-toggle="modal" data-target=".ai900">
              <img
                className="project-image hand-cursor"
                src={ai900Image}
                alt="AI-900 Certificate"
              />
            </a>
            {/* Modal */}
            <button
              type="button"
              className="btn btn_color"
              data-toggle="modal"
              data-target=".ai900"
            >
              View Certificate
            </button>
            <div
              className="modal fade ai900 hand-cursor"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered arrow-cursor">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      AI Fundamentals (AI-900)
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <img src={ai900Image} alt="AI-900 Certificate" />
                </div>
              </div>
            </div>
          </article>
        </li>

        {/* dp900 certification  */}
        <li className="ow">
          <article className="showcase-list container container-center">
            <h1>
              <img className="certificate_logo" src={dp900_logo} alt="" />
              <span> Microsoft Certified : Data Fundamentals </span>
              <span className="certification_name">(DP-900)</span>
            </h1>
            <small>August, 2021</small>
            <a data-toggle="modal" data-target=".dp900">
              <img
                className="project-image hand-cursor"
                src={dp900Image}
                alt="DP-900 Certificate"
              />
            </a>
            {/* Modal */}
            <button
              type="button"
              className="btn btn_color"
              data-toggle="modal"
              data-target=".dp900"
            >
              View Certificate
            </button>
            <div
              className="modal fade dp900 hand-cursor"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered arrow-cursor">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Data Fundamentals (DP-900)
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <img src={dp900Image} alt="DP-900 Certificate" />
                </div>
              </div>
            </div>
          </article>
        </li>

        {/* az900 certification  */}
        <li>
          <article className="showcase-list container container-center">
            <h1>
              <img className="certificate_logo" src={az900_logo} alt="" />
              <span> Microsoft Certified: Azure Fundamentals </span>
              <span className="certification_name">(Az-900)</span>
            </h1>
            <small>August, 2021</small>
            <a data-toggle="modal" data-target=".az900">
              <img
                className="project-image hand-cursor"
                src={az900Image}
                alt="AZ-900 Certificate"
              />
            </a>
            {/* Modal */}
            <button
              type="button"
              className="btn btn_color"
              data-toggle="modal"
              data-target=".az900"
            >
              View Certificate
            </button>
            <div
              className="modal fade az900 hand-cursor"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered arrow-cursor">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Azure Fundamentals (AZ-900)
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <img src={az900Image} alt="AZ-900 Certificate" />
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
