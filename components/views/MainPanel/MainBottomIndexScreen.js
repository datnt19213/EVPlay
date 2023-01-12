import React from "react";

import CenterScreen from "./BottomPanel/CenterScreen";
import LeftScreen from "./BottomPanel/LeftScreen";
import RightScreen from "./BottomPanel/RightScreen";
import {View} from "react-native";

import styles from "../../styles/main_scr_styles";

const MainBottomIndexScreen = () => {
  return (
    <View style={styles.indexBottomContainer}>
      <LeftScreen />
      <CenterScreen />
      <RightScreen />
    </View>
  );
};

export default MainBottomIndexScreen;
