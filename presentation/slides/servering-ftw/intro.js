import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/phil-hawksworth.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Serving for the win - Deploys and hosting for the rest of us
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Phil Hawksworth
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Developer Advocate - Netlify
      </Text>
    </React.Fragment>
  );
};
