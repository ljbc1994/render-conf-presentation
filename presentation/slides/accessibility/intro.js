import React from "react";
import { Heading } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => (
  <React.Fragment>
    <PresenterImage src={require("../../../assets/conference-speakers-pics/laura-carvajal.jpg")} />
    <Heading size={5} textColor="secondary" margin={20}>
      Common ways we break accessibility and how to avoid them
    </Heading>
    <Heading size={6} textColor="primary" margin={20}>
      Laura Carvajal
    </Heading>
  </React.Fragment>
);
