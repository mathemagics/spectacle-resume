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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  github: require("../assets/github-icon.png"),
  linkedin: require("../assets/linkedin-icon.png"),
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
          <Slide transition={["zoom"]} bgColor="primary" textAlign="left">
            <BusinessCardSlide />
          </Slide>

          <Slide>
            <Heading size={5} textAlign="left" textColor="#F06543">Objective Oriented</Heading>
            <hr />
              <Text textColor="white" textAlign="left">
                As a recent graduate from CodeCore developer Bootcamp with a background in computer science, I'm looking for an opportunity to contribute to and grow with a web development firm. I have experience in both front-end and back-end design in <span style={{ color: "#F09D51" }}>Ruby on Rails</span> and a particularly strong passion for working in <span style={{ color: "#F09D51" }}>JavaScript</span>, especially with the <span style={{ color: "#F09D51" }}>React</span> and <span style={{ color: "#F09D51" }}>React-Native</span> frameworks with <span style={{ color: "#F09D51" }}>Redux</span>.
              </Text>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="#313638" >
              <CodeCoreSlide />
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="#313638" >
              <UniversitySlide />
            </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" textSize="15px" textAlign="left">
            <Heading size={5} textAlign="left" textColor="#E0DFD5">Projects</Heading>
            <hr />
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="6px 0px 15px 0px">
              Multiplayer Chess <Link textAlign="left" href="https://github.com/mathemagics/rn-chess"><Image height="27px" margin="6px 10px 0px 0px"src={images.github}/></Link>
              <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px 5px 5px">Final Project for Codecore Developer Bootcamp</Text>
            </Heading>
            <Image width="320px" margin="0px 0px"src={images.chess} />
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 8px">Primary Technologies:</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">React-Native, Redux, Firebase</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" textSize="15px" textAlign="left">
            <Heading size={5} textAlign="left" textColor="#E0DFD5" margin="0px 0px 0px 0px">Projects</Heading>
            <hr />
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="3px 0px 0px 0px">
              pokeMAN go <Link textAlign="left" href="https://github.com/blb451/Pokeman-Go"><Image height="27px" margin="0px 0px 0px 0px" src={images.github}/></Link>
              <Link textAlign="left" href="https://pokeman-go.herokuapp.com/"><Image height="27px" margin="0px 0px 0px 7px" src={images.heroku}/></Link>
            </Heading>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px 5px 5px">Winner of the inaugural YVR Comedy Hackathon</Text>
            <Image width="280px" margin="0px 0px"src={images.pokeman} />
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">Primary Technologies:</Text>
            <Text textAlign="left" textSize={23} textColor="#F09D51" margin="0px 5px">Ruby On Rails, HTML, Face++, postgreSQL </Text>
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
