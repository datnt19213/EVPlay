import React, {Component} from "react";
import {View} from "react-native";
import {Audio} from "expo-av";

import mainStyles from "../styles/MainScrStyle.js";
import Paralaxlayers from "../styles/Animated/ParalaxLayers.js";
import MainTopIndexScreen from "./MainTopIndexScreen.js";
import MainBottomIndexScreen from "./MainBottomIndexScreen.js";
import ZoomAnim from "../styles/Animated/ZoomAnim.js";
import SFX from "../data/SFX.js";

import layer1 from "../../assets/images/Screen_layout_0.png";
import layer2 from "../../assets/images/Screen_layout_1.png";
import layer3 from "../../assets/images/Screen_layout_2.png";

import Animated from "react-native-reanimated";

export default function MainScreen() {
  return (
    <Animated.View
      key={ZoomAnim.loginKey}
      entering={ZoomAnim.enterAnim}
      exiting={ZoomAnim.exitAnim}
    >
      <View style={mainStyles.container}>
        <Paralaxlayers layers={[layer1, layer2, layer3]} />
      </View>
      <View style={mainStyles.indexContainer}>
        <MainTopIndexScreen />
        <MainBottomIndexScreen />
      </View>
    </Animated.View>
  );
}
