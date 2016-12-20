import React from "react";
import { Image, Link, Text } from "spectacle";
import { CardItem, SlideHeading } from "../components";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  github: require("../../assets/github-icon.png"),
  chess: require("../../assets/chess.gif"),
  heroku: require("../../assets/heroku-icon2.png")
};

preloader(images);

const RnChessSlide = () => {

  const pokeHeading = (
    <div> React-Native Chess
      <Link textAlign="left" href="https://github.com/mathemagics/rn-chess">
        <Image textAlign="left" height="27px" margin="0px 0px 0px 10px" src={images.github}/>
      </Link>
    </div>
  );
  return (
    <div>
      <SlideHeading
        title="Projects"
        sub={pokeHeading}
      />
      <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px 5px 5px">Winner of the inaugural YVR Comedy Hackathon</Text>
      <Image width="320px" margin="0px 0px"src={images.chess} />
      <CardItem
        title="Primary Technologies"
        body="React-Native, Redux, Firebase"
      />
  </div>
  );
};

export {RnChessSlide};
