import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/una-kravets.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Una Kravets
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        A CSS Carol
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Director of Product Design - Bustle
      </Text>
    </React.Fragment>
  );
};
