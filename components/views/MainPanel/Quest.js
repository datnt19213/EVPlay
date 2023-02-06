import React from "react";
import {Image, View, Text} from "react-native";
import mainStyles from "../../styles/MainScrStyle";
import QuestImage from "../../../assets/images/icon_ic/questIcon_ic.png";

import ClaimDailyQuest from "../../controller/ClaimDailyQuest.js";

const Quest = ({questId, questName, questDesc, questStatus}) => {
  return (
    <View style={mainStyles.questItem}>
      <Image style={mainStyles.questImage} source={QuestImage} />
      <View style={mainStyles.questInfo}>
        <Text style={mainStyles.questTitle}> {questName} </Text>
        <Text style={mainStyles.questDesc}> {questDesc} </Text>
      </View>
      <ClaimDailyQuest questId={questStatus} />
    </View>
  );
};

export default Quest;
