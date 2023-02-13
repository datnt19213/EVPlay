import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Text, View} from "react-native";

const CharactersScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
      >
        Character Screen
      </Text>
    </View>
  );
};

export default CharactersScreen;
