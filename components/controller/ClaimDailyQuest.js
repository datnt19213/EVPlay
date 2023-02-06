import React, {useState, useEffect} from "react";

import mainStyles from "../styles/MainScrStyle";
import INTERACT_DATA from "../data/InteractData";
import {Image, Text} from "react-native";
import Collected from "../../assets/images/icon_ic/Claimed_ic.png";

const ClaimDailyQuest = (questStatus) => {
  const [status, setStatus] = useState(questStatus);

  const resetDailyQuest = () => {
    setStatus(questStatus);
  };

  // setTimeout(() => {
  //   resetDailyQuest();
  // }, INTERACT_DATA.timeReset);
  setTimeout(() => {
    resetDailyQuest();
  }, 3000);

  const Claimed = () => {
    setStatus(true);
  };

  //Claim presss if the current quest status EQUAL to the default quest status (=false) ==> not to claim,
  // else (=true (different to default status)) ==> claimed
  if (status.valueOf() === questStatus) {
    return (
      <Text onPress={Claimed} style={mainStyles.questClaimBtn}>
        Get
      </Text>
    );
  }
  return (
    <>
      <Image source={Collected} style={mainStyles.claimed} />
    </>
  );
};

export default ClaimDailyQuest;
