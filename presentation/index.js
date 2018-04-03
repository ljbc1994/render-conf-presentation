// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, SlideSet } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import presentationTheme from "./config/theme";

// Import Slides
import { IntroductionSlides, DataVisualisationSlides, AccessibilitySlides } from "./slides";

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
        <SlideSet>{DataVisualisationSlides}</SlideSet>
        <SlideSet>{AccessibilitySlides}</SlideSet>
      </Deck>
    );
  }
}
