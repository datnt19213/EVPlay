import {useNavigation} from "@react-navigation/native";
import {number} from "prop-types";
import React, {useState} from "react";
import {Text, View} from "react-native";

const GamePlayIndexScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
      >
        {" "}
        Hello Game Panel{" "}
      </Text>
    </View>
  );
};

export default GamePlayIndexScreen;
