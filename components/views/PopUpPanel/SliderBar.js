import React, {useState} from "react";
import {Text} from "react-native";

import Slider from "@react-native-community/slider";

import colors from "../../../assets/colors/colors";
import userData from "../../data/ResourceDataSetup/UserData";
import convManualStyle from "../../styles/ConvManualPopUpStyle";

const SliderBar = ({maxValue, minValue, nameGive, nameRecieve}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [value, setToValue] = useState(0);

  const setValue = (sliderValue) => {
    setSliderValue(sliderValue);

    var value = sliderValue;

    if (nameGive === userData.POINT_NAME) {
      setToValue((value /= 5000).toFixed(0));
      if (value > 999999) {
        value = value / 1000000 + "M";
      }
    }
    if (nameGive === userData.LG_NAME) {
      setToValue((value *= 2500).toFixed(0));
    }
    if (nameGive === userData.SAPPHIRE_NAME) {
      setToValue((value *= 2).toFixed(0));
    }
  };
  return (
    <>
      <Text style={convManualStyle.convertManualDesc}>
        Consuming{" "}
        <Text style={convManualStyle.convertManualValue}>
          {sliderValue} {nameGive}
        </Text>{" "}
        to get{" "}
        <Text style={convManualStyle.convertManualValue}>
          {value > 999999 ? (value / 1000000).toFixed(0) + "M" : value}{" "}
          {nameRecieve}
        </Text>
      </Text>
      <Slider
        style={convManualStyle.sliderBar}
        thumbTintColor={colors.white}
        maximumValue={maxValue}
        minimumValue={minValue}
        minimumTrackTintColor={colors.greenLight}
        maximumTrackTintColor={colors.white}
        step={1}
        value={sliderValue}
        onValueChange={setValue}
      />
    </>
  );
};

export default SliderBar;
