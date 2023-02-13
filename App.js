import React from "react";

import {StyleSheet, View, StatusBar} from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SpriteSheet from "rn-sprite-sheet";
import {GameEngine} from "react-native-game-engine";
import Matter from "matter-js";

import SplashToAccessNavigation from "./components/controller/SplashToAccessNavigation.js";
import MainScreen from "./components/views/MainScreen.js";
import LoadingScreen from "./components/views/LoadingScreen.js";
import GamePlayIndexScreen from "./components/views/GamePlayIndexScreen.js";
import StoreScreen from "./components/views/InteractPanel/StoreScreen.js";
import HistoriesScreen from "./components/views/InteractPanel/HistoriesScreen.js";
import CharactersScreen from "./components/views/InteractPanel/CharactersScreen.js";

export default function App() {
  const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      {/* <View style={appStyles.container}> */}
      <StatusBar
        style="auto"
        hidden={true}
        backgroundColor={"transparent"}
        translucent={true}
      />
      <Stack.Navigator initialRouteName="AccessScreen">
        <Stack.Screen
          name="AccessScreen"
          component={SplashToAccessNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoadScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameScreen"
          component={GamePlayIndexScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StoreScreen"
          component={StoreScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoriesScreen"
          component={HistoriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CharactersScreen"
          component={CharactersScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

      {/* <SplashToAccessNavigation /> */}
      {/* <MainScreen /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const appStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    // backgroundColor: "#556422",
  },
});
