import React from "react";

import {View} from "react-native";

import TopScreen from "./MainPanel/TopScreen";
import mainStyles from "../styles/MainScrStyle.js";

const MainTopIndexScreen = () => {
  return (
    <View style={mainStyles.indexTopContainer}>
      <TopScreen />
    </View>
  );
};

export default MainTopIndexScreen;
