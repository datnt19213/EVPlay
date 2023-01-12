import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, View} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import SpriteSheet from "rn-sprite-sheet";
import {GameEngine} from "react-native-game-engine";
import Matter from "matter-js";

import SplashToAccessNavigation from "./components/controller/SplashToAccessNavigation";
import MainScreen from "./components/views/MainScreen";

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
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true} />
      {/* <SplashScreen /> */}
      {/* <AccessIndexScreen /> */}
      {/* <SplashToAccessNavigation /> */}
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
