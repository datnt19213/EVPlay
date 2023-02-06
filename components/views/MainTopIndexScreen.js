import React, {Component, useState} from "react";
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";

import mainStyles from "../styles/MainScrStyle.js";
import DarkLayout from "../../assets/images/Dark_Layout.png";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";

import ResourceBox from "./MainPanel/ResourceBox.js";
import CopyToClipboard from "../controller/CopyToClipboard.js";
import ShowProfilePopUp from "../controller/ShowProfilePopUp.js";
import ProfilePopUp from "./PopUpPanel/ProfilePopUp.js";

export default function MainTopIndexScreen() {
  return (
    <View style={mainStyles.indexTopContainer}>
      <ShowProfilePopUp />
      <ResourceBox />
    </View>
  );
}
