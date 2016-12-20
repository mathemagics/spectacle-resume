import React from "react";
import { Heading, Image, Link, Text } from "spectacle";
import { CardItem } from "./CardItem";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  github: require("../assets/github-icon.png"),
  heroku: require("../assets/heroku-icon2.png")
};

preloader(images);

export const ProjectItem = (props) => {

  const style = {
    titleStyles: {
      size: 6,
      caps: true,
      textColor: "#F06543",
      textAlign: "left",
      textFont: "Gill Sans",
      margin: "10px 0px 0px 0px"
    },
    awardStyles: {
      textAlign: "left",
      textSize: 18,
      textColor: "white",
      margin: "0px 5px"
    }
  };

  const { titleStyles, awardStyles } = style;
  return (
    <div>
      <Heading {...titleStyles}>
        {props.title}
        {props.github && <Link textAlign="left" href={props.github}>
          <Image height="27px" margin="10px 10px 0px 10px"src={images.github}/>
        </Link>}
        {props.deploy && <Link textAlign="left" href={props.deploy}>
          <Image height="27px" margin="7px 10px 0px 0px" src={images.heroku}/>
        </Link>}
        { props.sub && <Text {...awardStyles}> Winner of the CodeCore Weekend Hackathon </Text> }
      </Heading>
      <CardItem
        title="Primary Technologies"
        body={props.tech}
      />
    </div>
  );
};
