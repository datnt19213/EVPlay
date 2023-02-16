import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Back from "../../../assets/images/icon_ic/Back_ic.png";
import BackgroundHistories from "../../../assets/images/Screen_layout_0.png";
import colors from "../../../assets/colors/colors";
import ButtonOpacity from "../../styles/Animated/ButtonOpacity.js";

import WordsList from "../../controller/WordsList.js";
import InteractStyles from "../../styles/InteractStyle";
import Animated from "react-native-reanimated";
import ZoomAnim from "../../styles/Animated/ZoomAnim.js";

const HistoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <Animated.View
      key={ZoomAnim.loginKey}
      entering={ZoomAnim.enterAnim}
      exiting={ZoomAnim.exitAnim}
      style={InteractStyles.container}
    >
      <Image source={BackgroundHistories} style={StyleSheet.absoluteFill} />
      <View style={InteractStyles.topBar}>
        <TouchableOpacity
          style={InteractStyles.BackBtn}
          activeOpacity={ButtonOpacity.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={InteractStyles.backImg} source={Back} />
        </TouchableOpacity>
        <View style={InteractStyles.findBox}>
          <TextInput
            placeholder="Words search"
            cursorColor={colors.yellow}
            placeholderTextColor={colors.yellow}
            style={InteractStyles.findKey}
          />
          <Text style={InteractStyles.findBtn}>Find</Text>
        </View>
      </View>
      <WordsList />
    </Animated.View>
  );
};

export default HistoriesScreen;
