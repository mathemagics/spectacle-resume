import React from "react";
import { Text } from "spectacle";

export const CardItem = (props) => {

  const style = {
    titleStyles: {
      textAlign: "left",
      textSize: "18",
      textColor: "#E0DFD5",
      margin: "0px 0px 2px 20px"
    },
    bodyStyles: {
      textAlign: "left",
      textSize: "25",
      textColor: "#F09D51",
      margin: "0px 0px 2px 20px"
    }
  };
  const { titleStyles, bodyStyles } = style;

  return (
    <div>
      <Text {...titleStyles}>
        {props.title}
      </Text>
      <Text {...bodyStyles}>
        {props.body}
      </Text>
    </div>
  );
};
