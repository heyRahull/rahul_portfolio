import React from "react";
import blogsImage from "../../images/blogs_image.svg";
import PageIntro from "../PageIntro";
import Card from "./Card.js";
import cardData from "./cardData";

const Blogs = () => {
  return (
    <>
      <PageIntro
        image={blogsImage}
        name="blogsPage"
        heading="Blogs"
        description="Writing blogs is one of the things that I do. Whenever I learn
        something new, be it technical or generic, I try to write a blog
        on it. You can explore this space to read about the various blogs
        that I have written."
      />

      <section className="section">
        <div className="col p-3 d-flex flex-column position-static card_column">
          <div className="row mx-0 my-0">
            {cardData.map((card, index) => (
              <Card
                key={index}
                excerpt={card.excerpt}
                image={card.image}
                link={card.link}
                name={card.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
