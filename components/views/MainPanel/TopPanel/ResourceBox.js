import React from "react";
import {Image, ImageBackground, Text, View} from "react-native";
import styles from "../../../styles/main_scr_styles";
import DarkLayout from "../../../../assets/images/Dark_Layout.png";
import PointIcon from "../../../../assets/images/icon_ic/Point_ic.png";
import LuckyGrassIcon from "../../../../assets/images/icon_ic/Lucky_grass_ic.png";
import EnergyIcon from "../../../../assets/images/icon_ic/Energy_ic.png";
import SapphireIcon from "../../../../assets/images/icon_ic/Sapphire_ic.png";

const ResourceBox = () => {
  return (
    <View style={styles.resourceBox}>
      <ImageBackground
        blurRadius={100}
        source={DarkLayout}
        style={styles.resourceBgBlur}
      />
      <View style={styles.resourceDataBox}>
        <View style={styles.box}>
          <Image source={PointIcon} style={styles.resourceIcon} />
          <Text style={styles.valueBox} numberOfLines={1}>
            123456789
          </Text>
        </View>
        <View style={styles.box}>
          <Image source={LuckyGrassIcon} style={styles.resourceIcon} />
          <Text style={styles.valueBox} numberOfLines={1}>
            123
          </Text>
        </View>
        <View style={styles.box}>
          <Image source={EnergyIcon} style={styles.resourceIcon} />
          <Text style={styles.valueBox} numberOfLines={1}>
            123
          </Text>
        </View>
        <View style={styles.box}>
          <Image source={SapphireIcon} style={styles.resourceIcon} />
          <Text style={styles.valueBox} numberOfLines={1} >
            123
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ResourceBox;
