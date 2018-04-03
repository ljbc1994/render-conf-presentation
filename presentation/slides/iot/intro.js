import React from "react";
import { Heading, Text, Image } from "spectacle";
import PresenterImage from "../../components/presenter-image";

export default () => {
  return (
    <React.Fragment>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/indira-knight.jpg")}/>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/martin-woolley.jpg")}/>
      <PresenterImage src={require("../../../assets/conference-speakers-pics/gordon-williams.jpg")}/>
      <Heading size={5} textColor="secondary" margin={20}>
        Internet of All The Things
      </Heading>
      <Text size={6} textColor="primary" margin={20}>
        Indira Knight
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Creative Technologist
      </Text>
      <Text size={6} textColor="primary" margin={20}>
        Martin Woolley
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Developer Relations - EMEA at Bluetooth SIG
      </Text>
      <Text size={6} textColor="primary" margin={20}>
        Gordon Williams
      </Text>
      <Text textSize={20} textColor="primary" margin={20}>
        Director/Developer - Pur3 Ltd
      </Text>
      <Image src={require("../../../assets/memes/iot-all-the-things.png")} />
    </React.Fragment>
  );
};
