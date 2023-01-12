import React from "react";
import {Image, ImageBackground, Text, View} from "react-native";
import styles from "../../../styles/main_scr_styles";
import DarkLayout from "../../../../assets/images/Dark_Layout.png";
import CopyIcon from "../../../../assets/images/icon_ic/Copy_ic.png";

import ResourceBox from "./ResourceBox";

const TopScreen = () => {
  return (
    <View style={styles.indexTopContainer}>
      <View style={styles.profileBlock}>
        <ImageBackground
          blurRadius={100}
          source={DarkLayout}
          style={styles.blur}
        />
        <View style={styles.profileInfor}>
          <View style={styles.profileAvt}>
            <Image source={DarkLayout} style={styles.avt} />
          </View>
          <View style={styles.profileLabel}>
            <Text style={styles.profileName} numberOfLines={1}>
              Name
            </Text>
            <View style={styles.uidCopy}>
              <Text style={styles.profileUid} numberOfLines={1}>
                UID:123456789
              </Text>
              <Image style={styles.copyIcon} source={CopyIcon} />
            </View>
          </View>
        </View>
      </View>
      <ResourceBox />
    </View>
  );
};

export default TopScreen;
