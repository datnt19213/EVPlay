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

const profileStyles = StyleSheet.create({
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
    width: WIDTH - WIDTH / 13,
    height: HEIGHT - WIDTH / 13,
    resizeMode: "stretch",
    // backgroundColor: colors.blueLight,
    transform: [{translateY: WIDTH / 13 / 2}],
  },

  profilePanel: {
    width: WIDTH - WIDTH / 8,
    height: HEIGHT - WIDTH / 8,
    backgroundColor: colors.blueLight,
    alignSelf: "center",
    transform: [{translateY: WIDTH / 8 / 2}, {translateX: WIDTH / 8 / 2}],
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

  profileForm: {
    backgroundColor: colors.darkTransparent,
    width: WIDTH - WIDTH / 5 - WIDTH / 30,
    height: HEIGHT - WIDTH / 5 + WIDTH / 30,
    alignSelf: "center",
    transform: [
      {translateY: (WIDTH / 5 - WIDTH / 30) / 2},
      {translateX: WIDTH / 5 / 2},
    ],
    borderRadius: SCALE_AVT / 3,
    paddingHorizontal: WIDTH / 30,
    paddingVertical: HEIGHT / 30,
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },

  profileStatus: {
    paddingHorizontal: SCALE_AVT / 2,
    paddingBottom: SCALE_AVT / 2,
    paddingTop: SCALE_AVT / 3,
    borderRadius: SCALE_AVT,
    shadowColor: colors.darkTransparent,
    elevation: 15,
  },

  profileLevel: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: FONT_SIZE_3,
    paddingVertical: FONT_SIZE_3 / 5,
  },

  profileLevelNumber: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_2,
    color: colors.yellow,
  },

  profileLevelExp: {
    color: colors.yellow,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_2,
  },

  profileLevelProgress: {
    height: SCALE_AVT / 13,
    borderRadius: SCALE_AVT / 13,
  },

  profileLevelProgressBar: {
    backgroundColor: colors.white,
  },

  profileDesc: {
    backgroundColor: colors.darkTransparent,
    height: (HEIGHT - WIDTH / 5 + WIDTH / 30) / 2.5,
    borderRadius: SCALE_AVT / 3,
    paddingHorizontal: SCALE_AVT / 3,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_2,
    color: colors.white,
  },
});

export default profileStyles;
