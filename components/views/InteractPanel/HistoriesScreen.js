import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Text, View} from "react-native";

const HistoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
      >
        Histories Screen
      </Text>
    </View>
  );
};

export default HistoriesScreen;
