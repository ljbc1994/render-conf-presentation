import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/nadieh-bremer.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Data Sketches
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Nadieh Bremer
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Data Visualization Designer, Visual Cinnamon
      </Text>
    </React.Fragment>
  );
};
