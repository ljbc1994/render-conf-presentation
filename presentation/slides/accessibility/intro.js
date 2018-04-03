import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => (
  <React.Fragment>
    <PresenterImage src={require("../../../assets/conference-speakers-pics/laura-carvajal.jpg")} />
    <Heading size={5} textColor="secondary" margin={20}>
      Common ways we break accessibility and how to avoid them
    </Heading>
    <Text size={6} textColor="primary" margin={20}>
      Laura Carvajal
    </Text>
    <Text textSize={20} textColor="primary" margin={20}>
      Senior Developer - Financial Times
    </Text>
  </React.Fragment>
);
