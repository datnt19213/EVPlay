import React, {useState} from "react";
import {Alert, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import profileStyles from "../../styles/ProfilePopUpStyle";
import CloseIcon from "../../../assets/images/icon_ic/Close_ic.png";
import DarkLayout from "../../../assets/images/Dark_Layout.png";
import ButtonOpacity from "../../styles/Animated/ButtonOpacity.js";
import Modal from "react-native-modal";

const ProfilePopUp = () => {
  return (
    <View>
      <Image source={DarkLayout} />
    </View>
  );
};

export default ProfilePopUp;
