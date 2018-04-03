import React from "react";
import { Slide } from "spectacle";
import Intro from "./intro";
import LotrExample from "./lotr-example";
import RoyalsExample from "./royals-example";

const category = "data-visualisation";

export default [
  { transition: ["fade"], bgColor: "tertiary", children: <Intro /> },
  { transition: ["fade"], bgColor: "white", children: <LotrExample /> },
  { transition: ["fade"], bgColor: "white", children: <RoyalsExample /> }
].map((props, idx) => <Slide key={`${category}-slide-${idx}`} {...props} />);
