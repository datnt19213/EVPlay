import React from "react";
import {FadeIn, FadeOut} from "react-native-reanimated";

const FadeAnim = {
  loginKey: "loginPanel",
  regisKey: "registerPanel",
  helpKey: "helpPanel",
  
  enterAnim: FadeIn.duration(300),
  exitAnim: FadeOut.duration(30),
};

export default FadeAnim;
