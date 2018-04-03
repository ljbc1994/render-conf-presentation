import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/minko-gechev.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Teach Your Bundler The Users' Habits
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Minko Gechev
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Co-Founder - Rhyme.com
      </Text>
    </React.Fragment>
  );
};
