import React from "react";
import certificationImg from "../../images/certification-image.svg";
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
