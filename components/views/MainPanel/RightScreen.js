import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import mainStyles from "../../styles/MainScrStyle.js";
import ButtonOpacity from "../../styles/Animated/ButtonOpacity.js";

import Challenge from "../../../assets/images/icon_ic/Challenge_ic.png";
import Characters from "../../../assets/images/icon_ic/Characters_ic.png";
import Store from "../../../assets/images/icon_ic/Store_ic.png";
import Histories from "../../../assets/images/icon_ic/Histories_ic.png";
import {useNavigation} from "@react-navigation/native";
import ShowChallengeScreen from "../../controller/ShowChallengeScreen.js";
import ShowStoreScreen from "../../controller/ShowStoreScreen.js";
import ShowCharactersScreen from "../../controller/ShowCharactersScreen.js";
import ShowHistoriesScreen from "../../controller/ShowHistoriesScreen.js";

const RightScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={mainStyles.playBlock}>
      <View style={mainStyles.blockGroup}>
        <ShowChallengeScreen />
        <ShowStoreScreen />
      </View>
      <View style={mainStyles.blockGroup}>
        <ShowCharactersScreen />
        <ShowHistoriesScreen />
      </View>
    </View>
  );
};

export default RightScreen;
