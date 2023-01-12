import React from "react";
import {StyleSheet, View} from "react-native";
import Animated from "react-native-reanimated";

import AccessBackGroundImage from "../../assets/images/Screen_layout_0.png";
import styles from "../styles/access_styles";

import AccessFormNavigation from "../controller/AccessFormNavigation";

export default function AccessIndexScreen() {
  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.accessImageBackground, StyleSheet.absoluteFill]}
        source={AccessBackGroundImage}
        resizeMode="cover"
      />
      <AccessFormNavigation />
    </View>
  );
}
