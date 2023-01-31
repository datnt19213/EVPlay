import React, {Component} from "react";
import {Image, ImageBackground, Text, View} from "react-native";

import mainStyles from "../../styles/MainScrStyle.js";

import DarkLayout from "../../../assets/images/Dark_Layout.png";
import PointIcon from "../../../assets/images/icon_ic/Point_ic.png";
import LuckyGrassIcon from "../../../assets/images/icon_ic/Lucky_grass_ic.png";
import EnergyIcon from "../../../assets/images/icon_ic/Energy_ic.png";
import SapphireIcon from "../../../assets/images/icon_ic/Sapphire_ic.png";

export default function ResourceBox() {
  return (
    <View style={mainStyles.resourceBox}>
      {/* <ImageBackground
        blurRadius={100}
        source={DarkLayout}
        style={mainStyles.blur}
      /> */}
      <View style={mainStyles.resourceDataBox}>
        <View style={mainStyles.box}>
          <Image source={PointIcon} style={mainStyles.resourceIcon} />
          <Text style={mainStyles.valueBox} numberOfLines={1}>
            123456789
          </Text>
        </View>
        <View style={mainStyles.box}>
          <Image source={LuckyGrassIcon} style={mainStyles.resourceIcon} />
          <Text style={mainStyles.valueBox} numberOfLines={1}>
            123
          </Text>
        </View>
        <View style={mainStyles.box}>
          <Image source={EnergyIcon} style={mainStyles.resourceIcon} />
          <Text style={mainStyles.valueBox} numberOfLines={1}>
            123
          </Text>
        </View>
        <View style={mainStyles.box}>
          <Image source={SapphireIcon} style={mainStyles.resourceIcon} />
          <Text style={mainStyles.valueBox} numberOfLines={1}>
            123
          </Text>
        </View>
      </View>
    </View>
  );
}
