import React from "react";
import { SlideHeading, CardItem } from "../components";

const CodeCoreSlide = () => {
  return (
    <div>
      <SlideHeading
        title="Education"
        sub="CodeCore"
      />
      <CardItem
        title="Front End"
        body="HTML, CSS, JavaScript, jQuery, Ajax, React, React-Native"
      />
      <CardItem
        title="Back End"
        body="Ruby on Rails, Node.js"
      />
      <CardItem
        title="Databases"
        body="MySQL, PostgreSQL, MongoDB, ActiveRecord, FireBase"
      />
  </div>
  );
};

export {CodeCoreSlide};
