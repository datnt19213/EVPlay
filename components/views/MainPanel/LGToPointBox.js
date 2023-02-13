import React from "react";
import {Text, View} from "react-native";

import SliderBar from "../PopUpPanel/SliderBar";

import ConvManualStyle from "../../styles/ConvManualPopUpStyle";

import INTERACT_DATA from "../../data/InteractData";
import userData from "../../data/ResourceDataSetup/UserData.js";

import Animated from "react-native-reanimated";
import FadeAnim from "../../styles/Animated/FadeAnim.js";
import SlideAnim from "../../styles/Animated/SlideAnim.js";

const LGToPintBox = () => {
  return (
    <Animated.View
      key={SlideAnim.helpKey}
      entering={SlideAnim.enterAnim}
      exiting={SlideAnim.exitAnim}
      style={ConvManualStyle.convertManual}
    >
      <Text style={ConvManualStyle.convertManualTitle}>
        Convert Lucky Grass To Point
      </Text>
      <Text style={ConvManualStyle.convertManualDesc}>
        Convert value: 1 Lucky Grass to 2500 Point
      </Text>
      <View style={ConvManualStyle.sliderGroup}>
        <SliderBar
          maxValue={userData.LG_P_MAXVALUE}
          minValue={userData.MINVALUE}
          nameGive={userData.LG_NAME}
          nameRecieve={userData.POINT_NAME}
        />
      </View>
    </Animated.View>
  );
};

export default LGToPintBox;
