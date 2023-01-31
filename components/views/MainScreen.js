import React, {Component} from "react";
import {View} from "react-native";

import mainStyles from "../styles/MainScrStyle.js";
import Paralaxlayers from "../styles/Animated/ParalaxLayers.js";
import MainTopIndexScreen from "./MainTopIndexScreen.js";
import MainBottomIndexScreen from "./MainBottomIndexScreen.js";

import layer1 from "../../assets/images/Screen_layout_0.png";
import layer2 from "../../assets/images/Screen_layout_1.png";
import layer3 from "../../assets/images/Screen_layout_2.png";

export default function MainScreen() {
  return (
    <>
      <View style={mainStyles.container}>
        <Paralaxlayers layers={[layer1, layer2, layer3]} />
      </View>
      <View style={mainStyles.indexContainer}>
        <MainTopIndexScreen />
        <MainBottomIndexScreen />
      </View>
    </>
  );
}
