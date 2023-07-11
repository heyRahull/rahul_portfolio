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
import Certificate from "./Certificate";

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
        <Certificate
          name=" Microsoft Certified : Azure Associate "
          shortForm="Az-104"
          date="June, 2023"
          logo={az104_logo}
          image={az104Image}
        />

        <Certificate
          darkbg="ow"
          name=" Google Certified : Associate Cloud Engineer "
          shortForm="GCP-ACE"
          date="May, 2023"
          logo={gcp_logo}
          image={gcpImage}
        />

        <Certificate
          name=" Microsoft Certified : AI Fundamentals "
          shortForm="AI-900"
          date="September, 2021"
          logo={ai900_logo}
          image={ai900Image}
        />

        <Certificate
          darkbg="ow"
          name=" Microsoft Certified : Data Fundamentals "
          shortForm="DP-900"
          date="August, 2021"
          logo={dp900_logo}
          image={dp900Image}
        />

        <Certificate
          name=" Microsoft Certified: Azure Fundamentals "
          shortForm="Az-900"
          date="August, 2021"
          logo={az900_logo}
          image={az900Image}
        />
      </ul>
    </>
  );
};

export default Certifications;
