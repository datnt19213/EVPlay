import React from "react";
import {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
} from "react-native-reanimated";

const SlideAnim = {
  loginKey: "loginPanel",
  regisKey: "registerPanel",
  helpKey: "helpPanel",

  enterAnim: SlideInDown.duration(500),
  exitAnim: SlideOutUp.duration(300),
};

export default SlideAnim;
