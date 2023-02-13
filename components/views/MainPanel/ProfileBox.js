import React from "react";
import {Image, Text, View} from "react-native";

import mainStyles from "../../styles/MainScrStyle.js";

import DarkLayout from "../../../assets/images/Dark_Layout.png";
import CopyToClipboard from "../../controller/CopyToClipboard.js";

const ProfileBox = () => {
  return (
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
          <CopyToClipboard />
        </View>
      </View>
    </View>
  );
};

export default ProfileBox;
