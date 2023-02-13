import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import mainStyles from "../styles/MainScrStyle.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import SFX from "../data/SFX.js";

import {Audio} from "expo-av";

import Challenge from "../../assets/images/icon_ic/Challenge_ic.png";

import {useNavigation} from "@react-navigation/native";

const ShowChallengeScreen = () => {
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
        style={[mainStyles.blockBtn, mainStyles.block1]}
        activeOpacity={ButtonOpacity.button}
        onPress={() => {
          playSound();
          navigation.navigate("GameScreen");
          console.log("Challenge");
        }}
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
    </>
  );
};

export default ShowChallengeScreen;
