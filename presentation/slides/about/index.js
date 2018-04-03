import React from "react";
import { Slide } from "spectacle";
import About from "./about";

const category = "about";

export default [
  { transition: ["fade"], bgColor: "primary", children: <About /> }
].map((props, idx) => (
  <Slide key={`${category}-slide-${idx}`} {...props} />
));
