import React from "react";
import { Heading, Text } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/benedek-gagyi.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        WebAssembly as cross-platform architecture?!
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Benedek Gagyi
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Senior Software Engineer - join.me by LogMeIn
      </Text>
    </React.Fragment>
  );
};
