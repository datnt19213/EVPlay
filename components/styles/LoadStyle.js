import React from "react";
import {StyleSheet} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../assets/fonts/fonts.js";
import colors from "../../assets/colors/colors.js";

const WIDTH = hp("100%");
const HEIGHT = wp("100%");

const WIDTH_COMPONENT = WIDTH - 50;
const HEIGHT_COMPONENT = HEIGHT - 15;

const SCALE_AVT = HEIGHT_COMPONENT / 8;
const COPY_IC = SCALE_AVT / 3;
const FONT_SIZE_1 = SCALE_AVT / 3;
const FONT_SIZE_2 = FONT_SIZE_1 / 1.3;
const FONT_SIZE_3 = SCALE_AVT / 5;

const LoadStyle = StyleSheet.create({
  loadContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    HEIGHT: "100%",
  },
  backGroundLoadImage: {
    width: "100%",
    height: HEIGHT,
  },
  loadImage: {
    width: WIDTH / 15,
    height: WIDTH / 15,
  },

  loadingGroup: {
    position: "absolute",
    top: HEIGHT_COMPONENT - SCALE_AVT * 1.3,
    flexDirection: "row",
    width: WIDTH,
    height: WIDTH / 15,
    justifyContent: "center",
    paddingHorizontal: SCALE_AVT,
    overflow: "hidden",
  },
  loadBar: {
    width: WIDTH / 1.3,
  },
  loadProgressBar: {
    width: WIDTH / 1.5,
    height: FONT_SIZE_3 / 3,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    borderRadius: FONT_SIZE_3 / 3,
    marginHorizontal: SCALE_AVT / 3,
    marginVertical: FONT_SIZE_3 / 2,
  },

  textLoadPercent: {
    textAlign: "center",
    width: SCALE_AVT,
    color: colors.white,
    alignSelf: "flex-end",
  },
});

export default LoadStyle;
