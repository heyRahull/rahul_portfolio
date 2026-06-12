import React from "react";
import certificationImg from "../../../assets/images/certification-image.svg";
import Certificate from "./Certificate";
import PageIntro from "../../common/PageIntro";
import certificateData from "../../../data/certificateData";

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
            id={index}
            name={certifiacte.name}
            shortForm={certifiacte.shortForm}
            logo={certifiacte.logo}
            image={certifiacte.image}
            date={certifiacte.date}
          />
        ))}
      </ul>
    </>
  );
};

export default Certifications;
