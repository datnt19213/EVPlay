import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import mainStyles from "../styles/MainScrStyle.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import SFX from "../data/SFX.js";

import Histories from "../../assets/images/icon_ic/Histories_ic.png";

import {Audio} from "expo-av";
import {useNavigation} from "@react-navigation/native";

const ShowHistoriesScreen = () => {
  const navigation = useNavigation();

  const [sound, setSound] = React.useState();
  async function playSound() {
    const {sound} = await Audio.Sound.createAsync(SFX.click);
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <>
      <TouchableOpacity
        style={[mainStyles.blockBtn, mainStyles.block4]}
        activeOpacity={ButtonOpacity.button}
        onPress={() => {
          playSound();
          navigation.navigate("HistoriesScreen");
          console.log("Histories");
        }}
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
    </>
  );
};

export default ShowHistoriesScreen;
