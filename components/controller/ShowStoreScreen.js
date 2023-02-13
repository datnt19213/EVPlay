import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import mainStyles from "../styles/MainScrStyle.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import SFX from "../data/SFX.js";

import Store from "../../assets/images/icon_ic/Store_ic.png";

import {Audio} from "expo-av";
import {useNavigation} from "@react-navigation/native";

const ShowStoreScreen = () => {
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
        style={[mainStyles.blockBtn, mainStyles.block2]}
        activeOpacity={ButtonOpacity.button}
        onPress={() => {
          playSound();
          navigation.navigate("StoreScreen");
          console.log("Store");
        }}
      >
        <Image
          style={[
            mainStyles.blockIcon,
            mainStyles.blockIcon2,
            StyleSheet.absoluteFill,
          ]}
          source={Store}
        />
        <Text style={mainStyles.txtBlockBtn}>Store</Text>
      </TouchableOpacity>
    </>
  );
};

export default ShowStoreScreen;
