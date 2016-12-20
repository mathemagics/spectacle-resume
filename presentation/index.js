// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Spectacle
} from "spectacle";

//import components
import CodeCoreSlide from "./CodeCoreSlide";
import UniversitySlide from "./UniversitySlide";
import BusinessCardSlide from "./BusinessCardSlide";
import PokemanSlide from "./PokemanSlide";
import ObjectiveSlide from "./ObjectiveSlide";
import RnChessSlide from "./RnChessSlide";
import ProjectsSlide from "./ProjectsSlide";

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
            <ProjectsSlide />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
