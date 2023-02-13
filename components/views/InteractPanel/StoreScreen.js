import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Text, View} from "react-native";

const StoreScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
      >
        Store Screen
      </Text>
    </View>
  );
};

export default StoreScreen;
