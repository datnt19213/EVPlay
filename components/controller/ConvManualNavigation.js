import React, {useState} from "react";
import {Alert, Text, TouchableOpacity, View} from "react-native";

import convManualStyles from "../styles/ConvManualPopUpStyle.js";

import INTERACT_DATA from "../data/InteractData.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";

import PointToLGBox from "../views/MainPanel/PointToLGBox.js";
import LGToPointBox from "../views/MainPanel/LGToPointBox.js";
import SapphireToLGBox from "../views/MainPanel/SapphireToLGBox.js";

const ConvManualNavigation = () => {
  const [isPointShow, setPointShow] = useState(INTERACT_DATA.show);
  const [isLGShow, setLGShow] = useState(INTERACT_DATA.hide);
  const [isSapphireShow, setSapphireShow] = useState(INTERACT_DATA.hide);

  const togglePointShow = (event) => {
    setPointShow(INTERACT_DATA.show);
    setLGShow(INTERACT_DATA.hide);
    setSapphireShow(INTERACT_DATA.hide);
  };
  const toggleLGShow = (event) => {
    setPointShow(INTERACT_DATA.hide);
    setLGShow(INTERACT_DATA.show);
    setSapphireShow(INTERACT_DATA.hide);
  };
  const toggleSapphireShow = (event) => {
    setPointShow(INTERACT_DATA.hide);
    setLGShow(INTERACT_DATA.hide);
    setSapphireShow(INTERACT_DATA.show);
  };

  return (
    <>
      <View style={convManualStyles.convNavContent}>
        {isPointShow && <PointToLGBox />}
        {isLGShow && <LGToPointBox />}
        {isSapphireShow && <SapphireToLGBox />}
      </View>
      <View style={convManualStyles.convNavBtnGroup}>
        <TouchableOpacity
          activeOpacity={ButtonOpacity.button}
          onPress={togglePointShow}
          style={convManualStyles.convNavBtn}
        >
          <Text style={convManualStyles.convNavText}>P - Lucky Grass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ButtonOpacity.button}
          onPress={toggleLGShow}
          style={convManualStyles.convNavBtn}
        >
          <Text style={convManualStyles.convNavText}>LG - Point</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ButtonOpacity.button}
          onPress={toggleSapphireShow}
          style={convManualStyles.convNavBtn}
        >
          <Text style={convManualStyles.convNavText}>S - Lucky Grass</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ConvManualNavigation;
