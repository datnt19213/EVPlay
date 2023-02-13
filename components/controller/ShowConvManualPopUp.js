import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import Modal from "react-native-modal";
import {Audio} from "expo-av";

import convManualStyles from "../styles/ConvManualPopUpStyle.js";
import mainStyles from "../styles/MainScrStyle.js";

import CloseIcon from "../../assets/images/icon_ic/Close_ic.png";
import MessageLayout from "../../assets/images/Message_layout.png";

import ResourceBox from "../views/MainPanel/ResourceBox.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import SFX from "../data/SFX.js";

import ConversionManualPopUp from "../views/PopUpPanel/ConversionManualPopUp.js";

const ShowConvManualPopUp = () => {
  const [isModalVisibal, setModalVisibal] = useState(false);

  const toggleModal = () => {
    setModalVisibal(!isModalVisibal);

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
    <View style={mainStyles.resourceBox}>
      <TouchableOpacity
        style={mainStyles.resourceDataBox}
        activeOpacity={ButtonOpacity.button}
        onPress={toggleModal}
      >
        <ResourceBox />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisibal}
        animationIn={"zoomInUp"}
        animationOut={"zoomOutDown"}
        animationInTiming={800}
        animationOutTiming={800}
        style={convManualStyles.model}
        statusBarTranslucent={true}
        customBackdrop={<View style={{flex: 1}} />}
      >
        <View style={convManualStyles.container}>
          <Image
            source={MessageLayout}
            style={[convManualStyles.popUpBackGround]}
          />
          <View
            style={[convManualStyles.conversionPanel, StyleSheet.absoluteFill]}
          >
            <TouchableOpacity
              activeOpacity={ButtonOpacity.button}
              onPress={toggleModal}
            >
              <Image source={CloseIcon} style={convManualStyles.closeIcon} />
            </TouchableOpacity>
            <ConversionManualPopUp />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShowConvManualPopUp;
