import React from "react";
import { Heading } from "spectacle";
import PresenterImage from "../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../assets/conference-speakers-pics/nadieh-bremer.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Data Sketches
      </Heading>
      <Heading size={6} textColor="primary" margin={20}>
        Nadieh Bremer
      </Heading>
    </React.Fragment>
  );
};
