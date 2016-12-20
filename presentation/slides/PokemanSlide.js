import React from "react";
import { Image, Link, Text } from "spectacle";
import { CardItem, SlideHeading } from "../components";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  github: require("../../assets/github-icon.png"),
  pokeman: require("../../assets/pokeman.gif"),
  heroku: require("../../assets/heroku-icon2.png")
};

preloader(images);

const PokemanSlide = () => {

  const pokeHeading = (
    <div> pokeman go
      <Link textAlign="left" href="https://github.com/blb451/Pokeman-Go">
        <Image height="27px" margin="0px 0px 0px 10px" src={images.github}/>
      </Link>
      <Link textAlign="left" href="https://pokeman-go.herokuapp.com/">
        <Image height="27px" margin="0px 0px 0px 7px" src={images.heroku}/>
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
      <Image width="280px" margin="0px 0px"src={images.pokeman} />
      <CardItem
        title="Primary Technologies"
        body="Ruby On Rails, HTML, Face++, postgreSQL"
      />
  </div>
  );
};

export {PokemanSlide};
