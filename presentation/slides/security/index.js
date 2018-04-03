import React from "react";
import { Slide } from "spectacle";
import Intro from "./intro";

const category = "security";

export default [
  { transition: ["fade"], bgColor: "tertiary", children: <Intro /> }
].map((props, idx) => (
  <Slide key={`${category}-slide-${idx}`} {...props} />
));
