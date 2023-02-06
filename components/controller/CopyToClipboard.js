import React from "react";
import * as Clipboard from "expo-clipboard";
import {Image, TouchableOpacity} from "react-native";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import mainStyles from "../styles/MainScrStyle.js";
import CopyIcon from "../../assets/images/icon_ic/Copy_ic.png";

const CopyToClipboard = () => {
  const copyToClipboard = () => {
    Clipboard.setStringAsync("123456789");
  };

  return (
    <TouchableOpacity
      activeOpacity={ButtonOpacity.button}
      onPress={copyToClipboard}
    >
      <Image style={mainStyles.copyIcon} source={CopyIcon} />
    </TouchableOpacity>
  );
};

export default CopyToClipboard;
