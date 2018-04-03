import React from "react";
import { Slide } from "spectacle";
import Intro from "./intro";
import { maxSlideStyle } from "../../config/slide-styles";

const category = "intro";

export default [
  { bgColor: "tertiary", className: maxSlideStyle, children: <Intro /> }
].map((props, idx) => (
  <Slide key={`${category}-slide-${idx}`} {...props} />
));
