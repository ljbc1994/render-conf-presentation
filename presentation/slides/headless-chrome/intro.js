import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/yonatan-mevorach.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        DevTools and Headless Chrome - The Automation Power-Couple
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Yonatan Mevorach
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Senior Web Developer - Wix.com
      </Text>
    </React.Fragment>
  );
};
