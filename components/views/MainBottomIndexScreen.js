import React from "react";

import CenterScreen from "./MainPanel/CenterScreen";
import LeftScreen from "./MainPanel/LeftScreen";
import RightScreen from "./MainPanel/RightScreen";
import {View} from "react-native";

import mainStyles from "../styles/MainScrStyle";

const MainBottomIndexScreen = () => {
  return (
    <View style={mainStyles.indexBottomContainer}>
      <LeftScreen />
      <CenterScreen />
      <RightScreen />
    </View>
  );
};

export default MainBottomIndexScreen;
