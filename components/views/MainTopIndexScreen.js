import React, {Component, useState} from "react";
import {View} from "react-native";

import mainStyles from "../styles/MainScrStyle.js";

import ResourceBox from "./MainPanel/ResourceBox.js";
import ShowProfilePopUp from "../controller/ShowProfilePopUp.js";
import ShowConvManualPopUp from "../controller/ShowConvManualPopUp.js";

export default function MainTopIndexScreen() {
  return (
    <View style={mainStyles.indexTopContainer}>
      <ShowProfilePopUp />
      <ShowConvManualPopUp />
    </View>
  );
}
