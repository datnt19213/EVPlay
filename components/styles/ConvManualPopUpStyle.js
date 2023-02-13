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

const convManualStyles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
  },
  model: {
    margin: 0,
    width: WIDTH_COMPONENT + 100,
    height: HEIGHT / 2,
    backgroundColor: colors.darkTransparent,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  popUpBackGround: {
    alignSelf: "center",
    width: WIDTH - WIDTH / 3,
    height: HEIGHT - WIDTH / 8,
    resizeMode: "stretch",
    // backgroundColor: colors.blueLight,
    transform: [{translateY: WIDTH / 8 / 2}],
  },

  conversionPanel: {
    width: WIDTH - WIDTH / 2.5,
    height: HEIGHT - WIDTH / 5,
    backgroundColor: colors.blueLight,
    alignSelf: "center",
    transform: [{translateY: WIDTH / 5 / 2}, {translateX: WIDTH / 2.5 / 2}],
    borderBottomLeftRadius: SCALE_AVT / 1.5,
    borderTopRightRadius: SCALE_AVT / 1.5,
  },
  closeIcon: {
    padding: SCALE_AVT / 3,
    borderRadius: SCALE_AVT / 13,
    transform: [{translateY: -SCALE_AVT * 3}, {translateX: SCALE_AVT * 3}],
    backgroundColor: colors.darkTransparent,
    margin: WIDTH / 5,
    alignSelf: "flex-end",
    width: SCALE_AVT / 2,
    height: SCALE_AVT / 2,
  },

  conversionForm: {
    width: WIDTH - WIDTH / 5 - WIDTH / 3.6,
    height: HEIGHT - WIDTH / 3.8 + WIDTH / 30,
    alignSelf: "center",
    transform: [
      {translateY: (WIDTH / 23 + WIDTH / 30) / 5},
      {translateX: WIDTH / 13 / 8},
    ],
    borderRadius: SCALE_AVT / 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  convNavBtnGroup: {
    // backgroundColor: colors.darkpPurple,
    position: "absolute",
    top: SCALE_AVT / 3,
    left: -SCALE_AVT / 1.8,
  },

  convNavBtn: {
    backgroundColor: colors.yellow,
    paddingVertical: FONT_SIZE_3 / 2,
    paddingHorizontal: FONT_SIZE_3,
    marginVertical: SCALE_AVT / 8,
    borderRadius: FONT_SIZE_2,
    shadowColor: colors.dark,
    elevation: 8,
  },

  convNavText: {
    fontFamily: fonts.font,
    color: colors.white,
    fontSize: FONT_SIZE_2,
  },

  convNavContent: {
    position: "absolute",
    backgroundColor: colors.darkTransparent,
    width: WIDTH - (WIDTH / 1.8 - WIDTH / 30),
    height: HEIGHT - WIDTH / 3.8 + WIDTH / 30,
    right: 0,
    paddingLeft: SCALE_AVT,
    paddingRight: SCALE_AVT / 3,
    paddingVertical: SCALE_AVT / 3,
    borderRadius: SCALE_AVT / 2,
    overflow: "hidden",
  },

  convertManual: {
    paddingVertical: SCALE_AVT / 3,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 30,
    overflow: "hidden",
  },

  convertManualTitle: {
    width: "100%",
    textAlign: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.yellow,
    color: colors.white,
    fontFamily: fonts.font,
    height: SCALE_AVT / 1.3,
    fontSize: FONT_SIZE_1,
    alignSelf: "center",
    paddingHorizontal: SCALE_AVT / 2,
    textAlignVertical: "center",
  },

  convertManualDesc: {
    width: "100%",
    textAlign: "center",
    paddingHorizontal: SCALE_AVT / 2,
    textAlignVertical: "center",
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_2,
    alignSelf: "center",
    height: SCALE_AVT / 2,
  },

  convertManualValue: {
    color: colors.yellow,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_2,
    alignSelf: "center",
  },

  sliderGroup: {
    alignItems: "center",
    justifyContent: "center",
    height: WIDTH / 13,
  },
  sliderBar: {
    width: "100%",
  },
});

export default convManualStyles;
