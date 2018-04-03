import React from "react";
import Intro from "./intro";
import ImageGallerySlide from "../../components/image-gallery-slide";

const category = "intro";

const imagesToShow = [
  require("../../../assets/conference-pics/1.png"),
  require("../../../assets/conference-pics/2.png"),
  require("../../../assets/conference-pics/3.png"),
  require("../../../assets/conference-pics/4.png"),
  require("../../../assets/conference-pics/5.png"),
  require("../../../assets/conference-pics/6.png"),
  require("../../../assets/conference-pics/7.png"),
  require("../../../assets/conference-pics/5.png")
];

export default [
  <ImageGallerySlide images={imagesToShow} bgColor="tertiary" children={<Intro/>} key={`${category}-slide-0`}/>
]
