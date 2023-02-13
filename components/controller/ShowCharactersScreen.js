import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import mainStyles from "../styles/MainScrStyle.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import SFX from "../data/SFX.js";

import {Audio} from "expo-av";

import Characters from "../../assets/images/icon_ic/Characters_ic.png";

import {useNavigation} from "@react-navigation/native";

const ShowCharactersScreen = () => {
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
        style={[mainStyles.blockBtn, mainStyles.block3]}
        activeOpacity={ButtonOpacity.button}
        onPress={() => {
          playSound();
          navigation.navigate("CharactersScreen");
          console.log("Characters");
        }}
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
    </>
  );
};

export default ShowCharactersScreen;
