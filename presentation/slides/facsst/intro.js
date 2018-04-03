import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/harry-roberts.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        FaCSSt—CSS and Performance
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Harry Roberts
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Consultant Front-End Architect
      </Text>
    </React.Fragment>
  );
};
