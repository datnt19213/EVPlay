import React, {useEffect, useState} from "react";
import AnimatedProgress from "react-native-reanimated-progress-bar";
import LoadStyle from "../styles/LoadStyle";
import colors from "../../assets/colors/colors";
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const LoadingProgress = () => {
  const navigation = useNavigation();
  const [isTime, setTime] = useState(0);

  useEffect(() => {
    try {
      if (isTime < 30) {
        setTimeout(() => {
          setTime(isTime + 10);
        }, 300);
      } else if (isTime < 50) {
        setTimeout(() => {
          setTime(isTime + 2);
        }, 300);
      } else if (isTime < 80) {
        setTimeout(() => {
          setTime(isTime + 5);
        }, 300);
      } else if (isTime < 100) {
        setTimeout(() => {
          setTime(isTime + 2);
        }, 300);
      } else {
        setTimeout(() => {
          navigation.navigate("MainScreen");
        }, 1000);
      }
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <>
      <View style={LoadStyle.loadProgressBar}>
        <AnimatedProgress
          fill={colors.yellow}
          current={isTime}
          total={100}
          style={LoadStyle.loadBar}
        />
      </View>
      <Text style={LoadStyle.textLoadPercent}>{isTime}%</Text>
    </>
  );
};

export default LoadingProgress;
