import React from "react";
import {Text, View} from "react-native";

import SliderBar from "../PopUpPanel/SliderBar.js";

import ConvManualStyle from "../../styles/ConvManualPopUpStyle.js";

import INTERACT_DATA from "../../data/InteractData.js";
import userData from "../../data/ResourceDataSetup/UserData.js";

import Animated from "react-native-reanimated";
import FadeAnim from "../../styles/Animated/FadeAnim.js";
import SlideAnim from "../../styles/Animated/SlideAnim.js";

const PointToLGBox = () => {
  return (
    <Animated.View
      key={SlideAnim.regisKey}
      entering={SlideAnim.enterAnim}
      exiting={SlideAnim.exitAnim}
      style={ConvManualStyle.convertManual}
    >
      <Text style={ConvManualStyle.convertManualTitle}>
        Convert Point To Lucky Grass
      </Text>
      <Text style={ConvManualStyle.convertManualDesc}>
        Convert value: 5000 Point to 1 Lucky Grass
      </Text>
      <View style={ConvManualStyle.sliderGroup}>
        <SliderBar
          maxValue={userData.P_LG_MAXVALUE}
          minValue={userData.MINVALUE}
          nameGive={userData.POINT_NAME}
          nameRecieve={userData.LG_NAME}
        />
      </View>
    </Animated.View>
  );
};

export default PointToLGBox;
