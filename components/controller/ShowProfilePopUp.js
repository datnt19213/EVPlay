import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";
import {Audio} from "expo-av";

import profileStyles from "../styles/ProfilePopUpStyle";
import mainStyles from "../styles/MainScrStyle";

import DarkLayout from "../../assets/images/Dark_Layout.png";
import CloseIcon from "../../assets/images/icon_ic/Close_ic.png";
import MessageLayout from "../../assets/images/Message_layout.png";

import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import CopyToClipboard from "./CopyToClipboard";
import ProfilePopUp from "../views/PopUpPanel/ProfilePopUp";
import ProfileBox from "../views/MainPanel/ProfileBox";
import SFX from "../data/SFX.js";

const ShowProfilePopUp = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);

    playSound();
  };

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
        style={mainStyles.profileBlock}
        activeOpacity={ButtonOpacity.button}
        onPress={toggleModal}
      >
        <ProfileBox />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        animationIn={"zoomInUp"}
        animationOut={"zoomOutDown"}
        animationInTiming={800}
        animationOutTiming={800}
        style={profileStyles.model}
        statusBarTranslucent={true}
        customBackdrop={<View style={{flex: 1}} />}
      >
        <View style={profileStyles.container}>
          <Image
            source={MessageLayout}
            style={[profileStyles.popUpBackGround]}
          />
          <View style={[profileStyles.profilePanel, StyleSheet.absoluteFill]}>
            <TouchableOpacity
              activeOpacity={ButtonOpacity.button}
              onPress={toggleModal}
            >
              <Image source={CloseIcon} style={profileStyles.closeIcon} />
            </TouchableOpacity>
          </View>
          <ProfilePopUp />
        </View>
      </Modal>
    </>
  );
};

export default ShowProfilePopUp;
