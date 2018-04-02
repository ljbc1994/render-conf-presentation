// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  SlideSet,
  Text
} from "spectacle";
import { maxSlideStyle } from "./config/slide-styles";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import presentationTheme from "./config/theme";

// Import Slides
import { IntroductionSlide, DataVisualisationSlide, AccessibilitySlides } from "./slides";

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
        <Slide bgColor="primary" className={maxSlideStyle}>
          <IntroductionSlide />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <DataVisualisationSlide />
        </Slide>
        <SlideSet>{AccessibilitySlides}</SlideSet>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
