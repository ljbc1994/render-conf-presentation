import React from "react";
import { Heading, List, ListItem } from "spectacle";

export default () => (
  <React.Fragment>
    <Heading size={5} textColor="tertiary" margin={20}>
      About
    </Heading>
    <List textColor="white">
      <ListItem margin="1.5rem 0">We went to Oxford for two days.</ListItem>
      <ListItem margin="1.5rem 0">Went to a quiz, came top 5.</ListItem>
      <ListItem margin="1.5rem 0">One Day Conference.</ListItem>
      <ListItem margin="1.5rem 0">25 speakers, 2000 people.</ListItem>
      <ListItem margin="1.5rem 0">About *most* things feddy</ListItem>
    </List>
  </React.Fragment>
);
