import React, {Component} from "react";
import {Image, ImageBackground, Text, View} from "react-native";

import mainStyles from "../styles/MainScrStyle.js";
import DarkLayout from "../../assets/images/Dark_Layout.png";
import CopyIcon from "../../assets/images/icon_ic/Copy_ic.png";

import ResourceBox from "./MainPanel/ResourceBox.js";

export default function MainTopIndexScreen() {
  return (
    <View style={mainStyles.indexTopContainer}>
      <View style={mainStyles.profileBlock}>
        {/* <ImageBackground
          blurRadius={100}
          source={DarkLayout}
          style={mainStyles.blur}
        /> */}
        <View style={mainStyles.profileInfor}>
          <View style={mainStyles.profileAvt}>
            <Image source={DarkLayout} style={mainStyles.avt} />
          </View>
          <View style={mainStyles.profileLabel}>
            <Text style={mainStyles.profileName} numberOfLines={1}>
              Name
            </Text>
            <View style={mainStyles.uidCopy}>
              <Text style={mainStyles.profileUid} numberOfLines={1}>
                UID:123456789
              </Text>
              <Image style={mainStyles.copyIcon} source={CopyIcon} />
            </View>
          </View>
        </View>
      </View>
      <ResourceBox />
    </View>
  );
}
