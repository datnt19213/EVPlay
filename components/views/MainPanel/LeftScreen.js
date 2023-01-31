import React, {Component} from "react";
import {Text, View} from "react-native";
import mainStyles from "../../styles/MainScrStyle.js";
import DarkLayout from "../../../assets/images/Dark_Layout.png";
import Quest from "./Quest.js";

const LeftScreen = ({quests}) => {
  return (
    <View style={mainStyles.questBox}>
      <Text style={mainStyles.questBoxTitle}>Daily Quests</Text>
      {quests.map((quest, index) => (
        <Quest
          key={`quest_${index}`}
          questId={index + 1}
          questName={quest.questName}
          questDesc={quest.questDesc}
          questStatus={quest.questStatus}
        />
      ))}
    </View>
  );
};

export default LeftScreen;
