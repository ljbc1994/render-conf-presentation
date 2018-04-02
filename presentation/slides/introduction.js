import React from "react";
import { Heading, Text } from "spectacle";

export default () => {
  return (
    <React.Fragment>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What
      </Heading>
      <Text size={6} textColor="secondary">Standard text</Text>
    </React.Fragment>
  );
};
