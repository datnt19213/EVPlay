import React from "react";
import {Alert, StyleSheet, Text, View} from "react-native";

import convManualStyles from "../../styles/ConvManualPopUpStyle.js";

import ConvManualNavigation from "../../controller/ConvManualNavigation.js";

const ConversionManualPopUp = () => {
  return (
    <View style={[convManualStyles.conversionForm, StyleSheet.absoluteFill]}>
      <ConvManualNavigation />
    </View>
  );
};

export default ConversionManualPopUp;
