import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/tomomi-imura.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Let's Get Chatty with Conversational Interface in JavaScript
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Tomomi Imura
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Developer Relations - Slack
      </Text>
    </React.Fragment>
  );
};
