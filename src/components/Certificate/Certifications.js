import React from "react";
import certificationImg from "../../images/certification-image.svg";
import az104_logo from "../../certificate-images/az104_logo.png";
import az104Image from "../../certificate-images/az-104.jpg";
import gcp_logo from "../../certificate-images/GCP-ACE_logo.png";
import gcpImage from "../../certificate-images/gcp_ace.jpg";
import ai900_logo from "../../certificate-images/ai900_logo.png";
import ai900Image from "../../certificate-images/ai-900.jpg";
import dp900_logo from "../../certificate-images/dp900_logo.png";
import dp900Image from "../../certificate-images/dp-900.jpg";
import az900_logo from "../../certificate-images/az900_logo.png";
import az900Image from "../../certificate-images/az-900.jpg";
import Certificate from "./Certificate";
import PageIntro from "../PageIntro";
import certificateData from "./certificateData";

const Certifications = () => {
  return (
    <>
      <PageIntro
        image={certificationImg}
        name="certicicationPage"
        heading="MY CERTIFICATES"
        description="Explore the comprehensive collection of certifications I have
        earned, showcasing my dedication to personal and professional
        growth."
      />

      <ul class="list-non-bullet off_white_at_odd">
        {certificateData.map((certifiacte, index) => (
          <Certificate
            key={index}
            name={certifiacte.name}
            shortForm={certifiacte.shortForm}
            logo={certifiacte.logo}
            image={certifiacte.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Certifications;
