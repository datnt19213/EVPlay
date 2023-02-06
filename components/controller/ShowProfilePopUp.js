import React, {useState} from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

import profileStyles from "../styles/ProfilePopUpStyle";
import ProfilePopUp from "../views/PopUpPanel/ProfilePopUp";
import DarkLayout from "../../assets/images/Dark_Layout.png";
import CloseIcon from "../../assets/images/icon_ic/Close_ic.png";
import MessageLayout from "../../assets/images/Message_layout.png";
import mainStyles from "../styles/MainScrStyle";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import CopyToClipboard from "./CopyToClipboard";

const ShowProfilePopUp = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity
        style={mainStyles.profileBlock}
        activeOpacity={ButtonOpacity.button}
        onPress={toggleModal}
      >
        <View style={mainStyles.profileInfor}>
          <View style={mainStyles.profileAvt}>
            <Image source={DarkLayout} style={mainStyles.avt} />
          </View>
          <View style={mainStyles.profileLabel}>
            <Text style={mainStyles.profileName} numberOfLines={1}>
              Name
            </Text>
            <View style={mainStyles.uidCopy}>
              <Text style={mainStyles.profileUid} numberOfLines={1}>
                UID:123456789
              </Text>
              <CopyToClipboard />
            </View>
          </View>
        </View>
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
        </View>
      </Modal>
    </>
  );
};

export default ShowProfilePopUp;
