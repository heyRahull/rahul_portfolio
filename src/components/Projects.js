import React from "react";
import projectImage from "../images/project-image.svg";
import PageIntro from "./PageIntro";
import Project from "./Project";
import projectData from "./projectData.js";

const Projects = () => {
  return (
    <>
      <PageIntro
        image={projectImage}
        name="projectsPage"
        heading="MY PROJECTS"
        description="You can see live implementation as well as source of some of the
        projects that I have made as a part of my learning and
        experimenting with different tech stack."
      />
      <ul className="list-non-bullet off_white_at_odd">
        {projectData.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            date={project.date}
            logo={project.logo}
            image={project.image}
            alt={project.alt}
            detail={project.detail}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))}
      </ul>
    </>
  );
};

export default Projects;
