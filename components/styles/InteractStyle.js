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

const InteractStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    HEIGHT: "100%",
  },
  topBar: {
    width: WIDTH_COMPONENT,
    height: SCALE_AVT,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backImg: {
    width: SCALE_AVT / 2,
    height: SCALE_AVT / 2,
    marginHorizontal: FONT_SIZE_3,
  },

  findBox: {
    width: WIDTH_COMPONENT - SCALE_AVT / 2,
    height: SCALE_AVT,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: FONT_SIZE_3,
    alignItems: "center",
    overflow: "hidden",
  },

  findKey: {
    width: WIDTH_COMPONENT / 2,
    height: SCALE_AVT - FONT_SIZE_3,
    borderColor: colors.yellow,
    marginVertical: FONT_SIZE_3 / 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: WIDTH_COMPONENT / 2,
    borderBottomLeftRadius: WIDTH_COMPONENT / 2,
    paddingHorizontal: FONT_SIZE_3,
    color: colors.white,
  },

  findBtn: {
    color: colors.yellow,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.yellow,
    borderTopRightRadius: WIDTH_COMPONENT / 2,
    borderBottomRightRadius: WIDTH_COMPONENT / 2,
    margin: FONT_SIZE_3 / 3,
    width: SCALE_AVT - FONT_SIZE_3 / 3,
    height: SCALE_AVT - FONT_SIZE_3,
  },
});

export default InteractStyles;
