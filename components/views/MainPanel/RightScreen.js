import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import mainStyles from "../../styles/MainScrStyle.js";
import ButtonOpacity from "../../styles/Animated/ButtonOpacity.js";

import Challenge from "../../../assets/images/icon_ic/Challenge_ic.png";
import Characters from "../../../assets/images/icon_ic/Characters_ic.png";
import Store from "../../../assets/images/icon_ic/Store_ic.png";
import Histories from "../../../assets/images/icon_ic/Histories_ic.png";

const RightScreen = () => {
  return (
    <View style={mainStyles.playBlock}>
      <View style={mainStyles.blockGroup}>
        <TouchableOpacity
          style={[mainStyles.blockBtn, mainStyles.block1]}
          activeOpacity={ButtonOpacity.button}
        >
          <Image
            style={[
              mainStyles.blockIcon,
              mainStyles.blockIcon1,
              StyleSheet.absoluteFill,
            ]}
            source={Challenge}
          />
          <Text style={mainStyles.txtBlockBtn}>Challenge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyles.blockBtn, mainStyles.block2]}
          activeOpacity={ButtonOpacity.button}
        >
          <Image
            style={[
              mainStyles.blockIcon,
              mainStyles.blockIcon2,
              StyleSheet.absoluteFill,
            ]}
            source={Store}
          />
          <Text style={mainStyles.txtBlockBtn}>Store</Text>
        </TouchableOpacity>
      </View>
      <View style={mainStyles.blockGroup}>
        <TouchableOpacity
          style={[mainStyles.blockBtn, mainStyles.block3]}
          activeOpacity={ButtonOpacity.button}
        >
          <Image
            style={[
              mainStyles.blockIcon,
              mainStyles.blockIcon3,
              StyleSheet.absoluteFill,
            ]}
            source={Characters}
          />
          <Text style={mainStyles.txtBlockBtn}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyles.blockBtn, mainStyles.block4]}
          activeOpacity={ButtonOpacity.button}
        >
          <Image
            style={[
              mainStyles.blockIcon,
              mainStyles.blockIcon4,
              StyleSheet.absoluteFill,
            ]}
            source={Histories}
          />
          <Text style={mainStyles.txtBlockBtn}>Histories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RightScreen;
