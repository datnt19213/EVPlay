import React, {useState, useEffect} from "react";
import Midnight from "react-native-midnight";

import mainStyles from "../styles/MainScrStyle";
import {Image, Text} from "react-native";
import Collected from "../../assets/images/icon_ic/Claimed.png";

const ClaimDailyQuest = (questStatus) => {
  const [status, setStatus] = useState(questStatus);
  var getMinute;

  const resetDailyQuest = () => {
    setStatus(questStatus);
  };

  useEffect(() => {
    const resetListener = Midnight.addListener(() => {
      resetDailyQuest();
    });
    return () => resetListener.remove();
  }, []);

  const Claimed = () => {
    getMinute = new Date().getMinutes();
    setStatus(true);
  };

  //Claim presss if the current quest status EQUAL to the default quest status (=false) ==> not to claim,
  // else (=true (different to default status)) ==> claimed
  if (questStatus === status) {
    return <Text onPress={Claimed}>Claim</Text>;
  }
  return (
    <>
      <Image source={Collected} style={mainStyles.claimed} />
    </>
  );
};

export default ClaimDailyQuest;
