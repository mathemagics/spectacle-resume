// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  Slide,
  Spectacle,
  Text
} from "spectacle";

//import components
import CodeCoreSlide from "./CodeCoreSlide";
import UniversitySlide from "./UniversitySlide";
import BusinessCardSlide from "./BusinessCardSlide";
import PokemanSlide from "./PokemanSlide";
import ObjectiveSlide from "./ObjectiveSlide";
import RnChessSlide from "./RnChessSlide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  github: require("../assets/github-icon.png"),
  chess: require("../assets/chess.gif"),
  pokeman: require("../assets/pokeman.gif"),
  heroku: require("../assets/heroku-icon2.png")
};

preloader(images);

const theme = createTheme({
  primary: "#313638",
  secondary: "#E0DFD5",
  tertiary: "#F06543"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide>
            <BusinessCardSlide />
          </Slide>
          <Slide>
            <ObjectiveSlide />
          </Slide>
          <Slide>
            <CodeCoreSlide />
          </Slide>
          <Slide>
            <UniversitySlide />
          </Slide>
          <Slide>
            <RnChessSlide />
          </Slide>
          <Slide>
            <PokemanSlide />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" textSize="15px" textAlign="left">
            <Heading size={5} textAlign="left" textColor="#E0DFD5">/Projects </Heading>
            <hr />
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="10px 0px 0px 0px">
              Find My Pet <Link textAlign="left" href="https://github.com/CodeCoreYVR/find_my_pet"><Image height="27px" margin="10px 10px 0px 0px"src={images.github}/></Link>
              <Link textAlign="left" href="https://findmypetapp2.herokuapp.com/"><Image height="27px" margin="7px 10px 0px 0px" src={images.heroku}/></Link>
              <Text textAlign="left" textSize={18} textColor="white" margin="0px 5px">Winner of the CodeCore Weekend Hackathon </Text>
            </Heading>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 8px">Technologies Used:</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Ruby on Rails API with Ajax, Google Maps, HTML, JS </Text>
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="10px 0px 0px 0px">
              Indie Arcade <Link textAlign="left" href="https://github.com/CodeCoreYVR/indie_arcade"><Image height="27px" margin="10px 10px 0px 0px"src={images.github}/></Link>
              <Link textAlign="left" href="http://indiearcade-tone.herokuapp.com/"><Image height="27px" margin="7px 10px 0px 0px" src={images.heroku}/></Link>
            </Heading>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 8px">Technologies Used:</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Ruby on Rails, HTML, CSS, JS </Text>
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="10px 0px 0px 0px">
              JS Chess <Link textAlign="left" href="https://github.com/mathemagics/javascriptChess"><Image height="27px" margin="10px 10px 0px 0px"src={images.github}/></Link>
              <Link textAlign="left" href="http://javascriptchess.atwebpages.com//"><Image height="27px" margin="7px 10px 0px 0px" src={images.heroku}/></Link>
            </Heading>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 8px">Technologies Used:</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Ruby on Rails, HTML, CSS, JS </Text>

            </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
