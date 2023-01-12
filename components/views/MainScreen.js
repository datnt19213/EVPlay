import React from "react";
import {View} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";

import styles from "../styles/main_scr_styles";
import Paralaxlayers from "../styles/Animated/ParalaxLayers";
import MainTopIndexScreen from "../views/MainPanel/MainTopIndexScreen";
import MainBottomIndexScreen from "../views/MainPanel/MainBottomIndexScreen";

import layer1 from "../../assets/images/Screen_layout_0.png";
import layer2 from "../../assets/images/Screen_layout_1.png";
import layer3 from "../../assets/images/Screen_layout_2.png";

const MainScreen = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  }
  changeScreenOrientation();

  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  
  return (
    <View style={styles.container}>
      <Paralaxlayers layers={[layer1, layer2, layer3]} />
      <View style={[styles.container, styles.indexContainer]}>
        <MainTopIndexScreen />
        <MainBottomIndexScreen />
      </View>
    </View>
  );
};

export default MainScreen;
