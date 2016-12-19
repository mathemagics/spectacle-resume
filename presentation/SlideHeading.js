import React from "react";
import { Heading } from "spectacle";

export const SlideHeading = (props) => {
  const style = {
    titleStyles: {
      textAlign: "left",
      textColor: "#E0DFD5"
    },
    subStyles: {
      textAlign: "left",
      size: 6,
      textColor: "#F06543",
      margin: "10px 0px 0px 0px",
      textFont: "Gill Sans",
      caps: true
    }
  };
  const { titleStyles, subStyles } = style;

  return (
    <div>
      <Heading {...titleStyles}>
        {props.title}
      </Heading>
      <hr />
      <Heading {...subStyles}>
        {props.sub}
      </Heading>
    </div>
  );
};
