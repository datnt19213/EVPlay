import React, {useState} from "react";
import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import AnimatedProgress from "react-native-reanimated-progress-bar";

import colors from "../../../assets/colors/colors";

import profileStyles from "../../styles/ProfilePopUpStyle";
import ProfileBox from "../MainPanel/ProfileBox";

const ProfilePopUp = () => {
  return (
    <View style={[profileStyles.profileForm, StyleSheet.absoluteFill]}>
      <ProfileBox />
      <View style={profileStyles.profileStatus}>
        <View style={profileStyles.profileLevel}>
          <Text style={profileStyles.profileLevelNumber}>Lv. </Text>
          <Text style={profileStyles.profileLevelExp}>12345 / 12345 </Text>
        </View>
        <View style={profileStyles.profileLevelProgress}>
          <AnimatedProgress
            fill={colors.greenLight}
            current={2}
            total={6}
            style={profileStyles.profileLevelProgressBar}
          />
        </View>
      </View>
      <TextInput
        cursorColor={colors.yellow}
        multiline={true}
        numberOfLines={5}
        maxLength={80}
        style={profileStyles.profileDesc}
        placeholder="Describe to yourself"
        placeholderTextColor={colors.white}
        focusable={false}
      />
    </View>
  );
};

export default ProfilePopUp;
