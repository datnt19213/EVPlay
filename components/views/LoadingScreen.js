import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import LoadImageBckGroundScreen from "../../assets/images/Screen_layout_0.png";
import LoadingAnimation from "../../assets/images/Ball_Loading.gif";
import LoadStyle from "../styles/LoadStyle";
import LoadingProgress from "../controller/LoadingProgress";
import Animated from "react-native-reanimated";
import ZoomAnim from "../styles/Animated/ZoomAnim.js";

const LoadingScreen = () => {
  return (
    <Animated.View
      key={ZoomAnim.loginKey}
      entering={ZoomAnim.enterAnim}
      exiting={ZoomAnim.exitAnim}
      style={LoadStyle.loadContainer}
    >
      <Animated.Image
        style={[LoadStyle.backGroundLoadImage, StyleSheet.absoluteFill]}
        source={LoadImageBckGroundScreen}
        resizeMode="cover"
      />
      <View style={LoadStyle.loadingGroup}>
        <Image style={LoadStyle.loadImage} source={LoadingAnimation} />
        <LoadingProgress />
      </View>
    </Animated.View>
  );
};

export default LoadingScreen;
