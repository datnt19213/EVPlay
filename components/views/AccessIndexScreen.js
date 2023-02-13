import React from "react";
import {StyleSheet, View} from "react-native";
import Animated from "react-native-reanimated";

import AccessBackGroundImage from "../../assets/images/Screen_layout_0.png";
import styles from "../styles/AccessStyle.js";
import ZoomAnim from "../styles/Animated/ZoomAnim.js";

import AccessFormNavigation from "../controller/AccessFormNavigation.js";

export default function AccessIndexScreen() {
  return (
    <Animated.View
      key={ZoomAnim.loginKey}
      entering={ZoomAnim.enterAnim}
      exiting={ZoomAnim.exitAnim}
      style={styles.container}
    >
      <Animated.Image
        style={[styles.accessImageBackground, StyleSheet.absoluteFill]}
        source={AccessBackGroundImage}
        resizeMode="cover"
      />
      <AccessFormNavigation />
    </Animated.View>
  );
}
