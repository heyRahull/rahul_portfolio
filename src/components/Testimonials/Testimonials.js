import React from "react";
import certificationImg from "../../images/certification-image.svg";
import Award from "./Award";
import PageIntro from "../PageIntro";
import TestimonialData from "./TestimonialData";

const Testimonials = () => {
  return (
    <>
      <PageIntro
        image={certificationImg}
        name="testimonialPage"
        heading="Awards & Testimonials"
        description="Discover the array of awards and appreciations that highlight the recognition and positive feedback I've received in my journey, showcasing my commitment to excellence and the trust of those I've had the pleasure of working with."
      />

      <ul class="list-non-bullet off_white_at_odd">
        {TestimonialData.map((testimonial, index) => (
          <Award
            key={index}
            name={testimonial.name}
            shortForm={testimonial.shortForm}
            image={testimonial.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Testimonials;
