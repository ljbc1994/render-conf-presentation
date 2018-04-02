import React from "react";
import { Heading, Text } from "spectacle";
import ImageSlider from "../components/image-slider";

const imagesToShow = [
  require("../../assets/conference-pics/1.png"),
  require("../../assets/conference-pics/2.png"),
  require("../../assets/conference-pics/3.png"),
  require("../../assets/conference-pics/4.png"),
  require("../../assets/conference-pics/5.png"),
  require("../../assets/conference-pics/6.png"),
  require("../../assets/conference-pics/7.png"),
  require("../../assets/conference-pics/8.png")
];

export default () => {
  return (
    <React.Fragment>
      <ImageSlider images={imagesToShow} />
      <Heading size={4} caps lineHeight={1} textColor="primaryText">
        Render Conf 2018
      </Heading>
      <Text size={5} textColor="tertiary">
        Oxford
      </Text>
    </React.Fragment>
  );
};
