import React from "react";
import {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

const SlideAnim = {
  loginKey: "loginPanel",
  regisKey: "registerPanel",
  helpKey: "helpPanel",

  enterAnim: ZoomIn.duration(500),
  exitAnim: ZoomIn.duration(500),
};

export default SlideAnim;
