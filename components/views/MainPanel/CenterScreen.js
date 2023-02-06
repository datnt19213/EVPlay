import React, {Component} from "react";
import {Image, Text, View} from "react-native";
import mainStyles from "../../styles/MainScrStyle.js";
import WaitingMelon from "../../../assets/images/characters/Waiting_Melon.png";

const CenterScreen = () => {
  return (
    <View style={mainStyles.charOutline}>
      <Image
        capInsets={100}
        style={mainStyles.charImage}
        source={WaitingMelon}
      />
    </View>
  );
};

export default CenterScreen;
