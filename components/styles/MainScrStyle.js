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

const mainStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  indexContainer: {
    alignSelf: "center",
    marginVertical: 15,
    top: 0,
    bottom: 0,
    position: "absolute",
    minWidth: WIDTH / 2,
    width: WIDTH_COMPONENT,
    // overflow: "hidden",
  },
  indexTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    maxHeight: SCALE_AVT + 15,
    height: "100%",
  },
  indexBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    maxHeight: HEIGHT_COMPONENT - SCALE_AVT - 30,
    height: "100%",
  },
  profileBlock: {
    backgroundColor: colors.darkTransparent,
    padding: 8,
    overflow: "hidden",
    borderRadius: SCALE_AVT,
    justifyContent: "center",
  },
  blur: {
    opacity: 0.5,
  },
  profileInfor: {
    flexDirection: "row",
  },
  profileAvt: {
    overflow: "hidden",
    borderRadius: SCALE_AVT,
    borderColor: colors.white,
    borderWidth: 0.5,
  },
  avt: {
    width: SCALE_AVT,
    height: SCALE_AVT,
    opacity: 0.5,
  },
  profileLabel: {
    justifyContent: "center",
    marginHorizontal: 5,
  },
  profileName: {
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_1,
    overflow: "hidden",
  },
  uidCopy: {
    flexDirection: "row",
  },
  profileUid: {
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    overflow: "hidden",
    width: SCALE_AVT * 1.5,
  },
  copyIcon: {
    width: COPY_IC,
    height: COPY_IC,
    marginHorizontal: 15,
  },
  resourceBox: {
    justifyContent: "center",
    // backgroundColor: "rgba(5,5,25,0.5)",
  },
  resourceDataBox: {
    flexDirection: "row",
    backgroundColor: colors.darkTransparent,
    paddingHorizontal: 8,
    justifyContent: "center",
    borderRadius: SCALE_AVT,
    maxHeight: SCALE_AVT - 15,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    // backgroundColor: "rgba(200,20,200,0.5)",
    overflow: "hidden",
  },
  resourceIcon: {
    width: 30,
    height: 30,
    // backgroundColor: "rgba(200,200,20,0.5)",
  },
  valueBox: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    color: colors.white,
  },

  //Left

  questBox: {
    backgroundColor: colors.darkTransparent,
    width: WIDTH_COMPONENT / 3,
    height: HEIGHT_COMPONENT - SCALE_AVT - 50,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  questBoxTitle: {
    width: WIDTH_COMPONENT / 3,
    marginVertical: 3,
    paddingVertical: SCALE_AVT / 8,
    textAlign: "center",
    alignSelf: "center",
    color: colors.yellow,
    borderBottomColor: colors.yellow,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  questItem: {
    marginVertical: 0.5,
    maxWidth: WIDTH_COMPONENT / 3,
    height: HEIGHT_COMPONENT / 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "flex-start",
    borderBottomColor: colors.yellow,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  questImage: {
    width: SCALE_AVT / 2,
    height: SCALE_AVT / 2,
    borderRadius: SCALE_AVT / 2,
  },
  questInfo: {
    overflow: "hidden",
    maxWidth: WIDTH_COMPONENT / 3 / 1.3,
    width: WIDTH_COMPONENT / 3 / 1.3,
    alignSelf: "center",
  },
  questTitle: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    color: colors.white,
    borderColor: colors.white,
  },
  questDesc: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    color: colors.yellow,
  },
  questClaimBtn: {
    width: SCALE_AVT / 1.8,
    height: SCALE_AVT / 1.8,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_2,
    color: colors.white,
    borderColor: colors.yellow,
    borderWidth: 0.5,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: SCALE_AVT / 2,
    textAlignVertical: "center",
  },
  claimed: {
    width: SCALE_AVT / 2,
    height: SCALE_AVT / 2,
  },

  //Right

  playBlock: {
    flexDirection: "column",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: WIDTH / 3.8,
    height: WIDTH / 3.8,
    right: SCALE_AVT,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    overflow: "hidden",
    transform: [{rotate: "-45deg"}],
  },
  blockGroup: {
    flexDirection: "row",
    // backgroundColor: "rgba(255, 255, 2, 0.5)",
    marginVertical: SCALE_AVT / 13,
  },
  blockBtn: {
    maxWidth: WIDTH / 3 / 2.8,
    maxHeight: WIDTH / 3 / 2.8,
    width: WIDTH / 3 / 2.8,
    height: WIDTH / 3 / 2.8,
    marginHorizontal: SCALE_AVT / 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SCALE_AVT / 5,
    overflow: "hidden",
  },

  block1: {
    backgroundColor: colors.yellow,
    elevation: 3,
  },
  block2: {
    backgroundColor: colors.greenLight,
    elevation: 3,
  },
  block3: {
    backgroundColor: colors.darkpPurple,
    elevation: 3,
  },
  block4: {
    backgroundColor: colors.blueLight,
    elevation: 3,
  },

  txtBlockBtn: {
    alignSelf: "center",
    fontFamily: fonts.font,
    color: colors.white,
    fontSize: FONT_SIZE_1,
    transform: [{rotate: "45deg"}],
    textShadowColor: colors.dark,
    textShadowRadius: 8,
  },

  //Center

  charOutline: {
    width: WIDTH_COMPONENT / 3,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  charImage: {
    width: WIDTH_COMPONENT / 3,
    height: HEIGHT_COMPONENT / 1.5,
    alignSelf: "center",
    left: -SCALE_AVT / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  blockIcon: {
    width: "100%",
    height: "100%",
  },

  blockIcon1: {
    transform: [{rotate: "45deg"}, {scale: 1.3}],
  },
  blockIcon2: {
    transform: [{rotate: "45deg"}, {scale: 1}],
  },
  blockIcon3: {
    transform: [{rotate: "45deg"}, {scale: 1}],
  },
  blockIcon4: {
    transform: [{rotate: "45deg"}, {scale: 0.8}],
  },
});

export default mainStyles;
