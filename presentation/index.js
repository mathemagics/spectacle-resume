// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Slide,
  Spectacle,
  Text
} from "spectacle";

//import coomponents
import {
  CardItem
} from "./CardItem";

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
            <Heading textAlign="left" size={3} caps lineHeight={1} textColor="#E0DFD5" textFont="Gill Sans">
              Paul Bodnar
            </Heading>
            <Heading size={6} caps lineHeight={1} textColor="#F09D51" textAlign="left" textFont="Gill Sans">
              Web Developer
            </Heading>
            <Layout>
              <Fill>
              <Text textColor="white" textAlign="left" lineHeight={1.5}>higgsbison@gmail.com</Text>
              <Text textColor="white" textAlign="left">778.233.3634</Text>
              </Fill>
            </Layout>
            <Layout>
              <Link textAlign="left" href="https://github.com/mathemagics"><Image width="40px" margin="10px 10px"src={images.github}/></Link>
              <Link textAlign="left" href="https://ca.linkedin.com/in/paul-bodnar"><Image width="46px" margin="7px 10px" src={images.linkedin}/></Link>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={5} textAlign="left" textColor="#F06543">Objective Oriented</Heading>
            <hr />
              <Text textColor="white" textAlign="left">
                As a recent graduate from CodeCore developer Bootcamp with a background in computer science, I'm looking for an opportunity to contribute to and grow with a web development firm. I have experience in both front-end and back-end design in <span style={{ color: "#F09D51" }}>Ruby on Rails</span> and a particularly strong passion for working in <span style={{ color: "#F09D51" }}>JavaScript</span>, especially with the <span style={{ color: "#F09D51" }}>React</span> and <span style={{ color: "#F09D51" }}>React-Native</span> frameworks with <span style={{ color: "#F09D51" }}>Redux</span>.
              </Text>
            </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" textSize="15px" textAlign="left">
            <Heading textAlign="left" textColor="#E0DFD5">Education </Heading>
            <hr />
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="10px 0px 0px 0px">
              CodeCore Developer Bootcamp
            </Heading>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">Front End </Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">HTML, CSS, JavaScript, jQuery, Ajax, React </Text>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">Back End</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Ruby on Rails, Node.js</Text>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">Databases</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">MySQL, PostgreSQL, MongoDB, ActiveRecord, FireBase</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" textSize="15px" textAlign="left">
            <Heading textAlign="left" textColor="#E0DFD5">/Education</Heading>
            <hr />
            <Heading size={6} caps lineHeight={1} textColor="#F06543" textAlign="left" textFont="Gill Sans" margin="10px 0px 0px 0px">
            University of Alberta
            </Heading>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">CMPUT 114</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Introduction to Computer Science</Text>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">CMPUT 115</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Programming with Data Structures</Text>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">CMPUT 272</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Formal Systems and Logic in Computing Science</Text>
            <Text textAlign="left" textSize={18} textColor="#E0DFD5" margin="0px 5px">CMPUT115</Text>
            <Text textAlign="left" textSize={25} textColor="#F09D51" margin="0px 5px">Programming with Data Structures</Text>
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
