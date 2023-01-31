import React, {Component} from "react";

import CenterScreen from "./MainPanel/CenterScreen.js";
import LeftScreen from "./MainPanel/LeftScreen.js";
import RightScreen from "./MainPanel/RightScreen.js";
import {View} from "react-native";

import mainStyles from "../styles/MainScrStyle.js";
import QuestListData from "../data/QuestListData.js";

const MainBottomIndexScreen = () => {
  return (
    <View style={mainStyles.indexBottomContainer}>
      <LeftScreen
        quests={[
          QuestListData.quest_1,
          QuestListData.quest_2,
          QuestListData.quest_3,
          QuestListData.quest_4,
          QuestListData.quest_5,
        ]}
      />
      <CenterScreen />
      <RightScreen />
    </View>
  );
};

export default MainBottomIndexScreen;
