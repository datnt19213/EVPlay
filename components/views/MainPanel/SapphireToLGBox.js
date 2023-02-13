import React from "react";
import {Text, View} from "react-native";

import SliderBar from "../PopUpPanel/SliderBar";

import ConvManualStyle from "../../styles/ConvManualPopUpStyle.js";

import INTERACT_DATA from "../../data/InteractData";
import userData from "../../data/ResourceDataSetup/UserData.js";
import gameSource from "../../data/ResourceDataSetup/GameData.js";

import Animated from "react-native-reanimated";
import FadeAnim from "../../styles/Animated/FadeAnim";
import SlideAnim from "../../styles/Animated/SlideAnim.js";

const SapphireToLGBox = () => {
  return (
    <Animated.View
      key={SlideAnim.loginKey}
      entering={SlideAnim.enterAnim}
      exiting={SlideAnim.exitAnim}
      style={ConvManualStyle.convertManual}
    >
      <Text style={ConvManualStyle.convertManualTitle}>
        Convert Sapphire To Lucky Grass
      </Text>
      <Text style={ConvManualStyle.convertManualDesc}>
        Convert value: 1 Sapphire to 2 Lucky Grass
      </Text>
      <View style={ConvManualStyle.sliderGroup}>
        <SliderBar
          maxValue={userData.S_LG_MAXVALUE}
          minValue={userData.MINVALUE}
          nameGive={userData.SAPPHIRE_NAME}
          nameRecieve={userData.LG_NAME}
        />
      </View>
    </Animated.View>
  );
};

export default SapphireToLGBox;
