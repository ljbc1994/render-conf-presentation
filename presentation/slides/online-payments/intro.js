import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/peter-oshaughnessy.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Reducing the friction of online payments
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Peter O'Shaughnessy
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Developer Advocate - Samsung Internet
      </Text>
    </React.Fragment>
  );
};
