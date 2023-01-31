import React from "react";
import {StyleSheet, View, StatusBar} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import SpriteSheet from "rn-sprite-sheet";
import {GameEngine} from "react-native-game-engine";
import Matter from "matter-js";

import SplashToAccessNavigation from "./components/controller/SplashToAccessNavigation.js";
import MainScreen from "./components/views/MainScreen.js";

export default function App() {
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
    <View style={appStyles.container}>
      <StatusBar style="auto" hidden={true} />
      {/* <SplashToAccessNavigation /> */}
      <MainScreen />
    </View>
  );
}

const appStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
