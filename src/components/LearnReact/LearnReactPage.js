import React from 'react';
import PageIntro from "../PageIntro";
import projectImage from "../../images/project-image.svg";
import QuestionAccordion from "./QuestionAccordion";
import learnReactData from "./learnReactData";

const LearnReactPage = () => {
  return (
    <div >
      <PageIntro
        image={projectImage}
        name="learnReactPage"
        heading="Learn React with Rahul"
        description="A living document of my technical journey, focusing on clean code principles, modular component design, and performance optimization in the React ecosystem."
      />
      
      <div className="container container-center" >
        {learnReactData.map((item, index) => (
          <QuestionAccordion 
            key={index} 
            title={item.title} 
            description={item.description} 
            code={item.code} 
          />
        ))}
      </div>
    </div>
  );
};

export default LearnReactPage;