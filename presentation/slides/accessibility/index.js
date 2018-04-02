import React from "react";
import { Slide } from "spectacle";
import Intro from "./intro";
import Second from "./second";

const category = "accessibility";

export default [
  { transition: ["fade"], bgColor: "tertiary", children: <Intro /> },
  { transition: ["fade"], bgColor: "tertiary", children: <Second /> }
].map((props, idx) => (
  <Slide key={`${category}-slide-${idx}`} {...props} />
));
