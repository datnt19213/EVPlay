import React from "react";
import {ImageBackground, StatusBar, StyleSheet, Text, View} from "react-native";
import ImageSplashScreen from "../../assets/images/SplashScreen.gif";

export default function SplashScreen() {
  return (
    <View style={styles.splashScreenContainer}>
      <ImageBackground
        style={{width: "100%", height: "100%"}}
        source={ImageSplashScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreenContainer: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
