import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/asim-hussain.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        How to hack a web app?
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Asim Hussain
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Cloud Developer Advocate - Microsoft
      </Text>
    </React.Fragment>
  );
};
