// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, SlideSet } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import presentationTheme from "./config/theme";

// Import Slides
import { 
  IntroductionSlides,
  AboutSlides,
  DataVisualisationSlides,
  AccessibilitySlides,
  IoTSlides,
  WebAssemblySlides,
  OnlinePaymentsSlides,
  HeadlessChromeSlides,
  ServeringFTWSlides,
  SecuritySlides,
  BundlerSlides,
  ConversationalInterfacesSlides,
  FaCCStSlides,
  CSSCarol
} from "./slides";

// Require CSS
require("normalize.css");

const theme = createTheme(
  presentationTheme.colors,
  presentationTheme.fonts
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <SlideSet>{IntroductionSlides}</SlideSet>
        <SlideSet>{AboutSlides}</SlideSet>
        <SlideSet>{DataVisualisationSlides}</SlideSet>
        <SlideSet>{AccessibilitySlides}</SlideSet>
        <SlideSet>{IoTSlides}</SlideSet>
        <SlideSet>{WebAssemblySlides}</SlideSet>
        <SlideSet>{OnlinePaymentsSlides}</SlideSet>
        <SlideSet>{HeadlessChromeSlides}</SlideSet>
        <SlideSet>{ServeringFTWSlides}</SlideSet>
        <SlideSet>{SecuritySlides}</SlideSet>
        <SlideSet>{BundlerSlides}</SlideSet>
        <SlideSet>{ConversationalInterfacesSlides}</SlideSet>
        <SlideSet>{FaCCStSlides}</SlideSet>
        <SlideSet>{CSSCarol}</SlideSet>
      </Deck>
    );
  }
}
