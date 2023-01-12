import React from "react";
import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import {StyleSheet, useWindowDimensions} from "react-native";

import PARALAX_INTERACT from "../../data/ParalaxInteractData";

const ParalaxEffect = ({image, imageLayers}) => {
  const {width, height} = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION);
  const imageStyle = useAnimatedStyle(() => {
    const {pitch, roll} = sensor.sensor.value;

    return {
      left: withTiming(
        interpolate(
          pitch,
          [-PARALAX_INTERACT.pi, PARALAX_INTERACT.pi],
          [(-PARALAX_INTERACT.imageOffset * 2) / imageLayers, 0]
        ),
        {duration: 50}
      ),
      top: withTiming(
        interpolate(
          roll,
          [-PARALAX_INTERACT.halfPi, PARALAX_INTERACT.halfPi],
          [(-PARALAX_INTERACT.imageOffset * 1.25) / imageLayers, 0]
        ),
        {duration: 50}
      ),
    };
  });
  return (
    <Animated.Image
      source={image}
      style={[
        {
          width: width + (2 * PARALAX_INTERACT.imageOffset) / imageLayers,
          height: height + (2 * PARALAX_INTERACT.imageOffset) / imageLayers,
          position: "absolute",
        },
        imageStyle,
        StyleSheet.absoluteFill,
      ]}
    />
  );
};

export default ParalaxEffect;
