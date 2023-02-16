import React, {Component} from "react";
import {Image, Text, View} from "react-native";
import {Audio} from "expo-av";
import mainStyles from "../../styles/MainScrStyle.js";
import WaitingMelon from "../../../assets/images/characters/Waiting_Melon.png";
import SFX from "../../data/SFX.js";

const CenterScreen = () => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const {sound} = await Audio.Sound.createAsync(SFX.bg);
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
    <View
      style={mainStyles.charOutline}
      onStartShouldSetResponder={() => {
        playSound();
      }}
    >
      <Image
        capInsets={100}
        style={mainStyles.charImage}
        source={WaitingMelon}
      />
    </View>
  );
};

export default CenterScreen;
