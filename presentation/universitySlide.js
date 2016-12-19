import React from "react";
import { CardItem } from "./CardItem";
import { SlideHeading } from "./SlideHeading";

const UniversitySlide = () => {
  return (
    <div>
      <SlideHeading
        title="Education"
        sub="University of Alberta"
      />
      <CardItem
        title="CMPUT 114"
        body="Introduction to Computer Science"
      />
      <CardItem
        title="CMPUT 115"
        body="Programming with Data Structures"
      />
      <CardItem
        title="CMPUT 272"
        body="Formal Systems and Logic in Computing Science"
      />
      <CardItem
        title="CMPUT 204"
        body="Algorithms I"
      />
    </div>
  );
};

export default UniversitySlide;
