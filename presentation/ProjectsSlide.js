import React from "react";
import { Heading } from "spectacle";
import { ProjectItem } from "./ProjectItem";

const ProjectsSlide = () => {

  const style = {
    titleStyles: {
      textAlign: "left",
      textColor: "#E0DFD5",
      size: 6
    }
  };
  const { titleStyles } = style;

  return (
    <div>
      <Heading {...titleStyles}>
        Projects
      </Heading>
      <hr />
      <ProjectItem
        title="Find My Pet"
        sub="Winner of the CodeCore Weekend Hackathon"
        tech="Ruby on Rails API with Ajax, Google Maps, HTML, JS"
        github="https://github.com/CodeCoreYVR/find_my_pet"
        deploy="https://findmypetapp2.herokuapp.com"
      />
      <ProjectItem
        title="Indie Arcade"
        tech="Ruby on Rails, HTML, CSS, JS"
        github="https://github.com/CodeCoreYVR/indie_arcade"
        deploy="http://indiearcade-tone.herokuapp.com"
      />
      <ProjectItem
        title="JS Chess"
        tech="HTML, CSS, JS"
        github="https://github.com/mathemagics/javascriptChess"
        deploy="http://javascriptchess.atwebpages.com"
      />
    </div>
  );
};

export default ProjectsSlide;
