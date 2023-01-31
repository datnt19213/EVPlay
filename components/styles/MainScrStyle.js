import React from "react";
import {StyleSheet} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../assets/fonts/fonts.js";
import colors from "../../assets/colors/colors.js";
import ButtonOpacity from "./Animated/ButtonOpacity.js";

const HEIGHT = wp("100%");
const WIDTH = hp("100%");

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
    marginVertical: 15,
    top: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(255,100,100,0.5)",
    minWidth: WIDTH / 2,
    width: WIDTH_COMPONENT,
    // overflow: "hidden",
  },
  indexTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,0,100,0.5)",
    overflow: "hidden",
    maxHeight: SCALE_AVT + 15,
    height: "100%",
  },
  indexBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,100,0,0.5)",
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
    backgroundColor: "rgba(205,100,0,0.5)",
    overflow: "hidden",
  },
  uidCopy: {
    flexDirection: "row",
  },
  profileUid: {
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    backgroundColor: "rgba(250,10,0,0.5)",
    overflow: "hidden",
  },
  copyIcon: {
    width: COPY_IC,
    height: COPY_IC,
    marginHorizontal: 15,
    backgroundColor: "rgba(20, 255, 2, 0.5)",
  },
  resourceBox: {
    justifyContent: "center",
    backgroundColor: "rgba(5,5,25,0.5)",
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
    backgroundColor: "rgba(200,20,200,0.5)",
    overflow: "hidden",
  },
  resourceIcon: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(200,200,20,0.5)",
  },
  valueBox: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    color: colors.white,
  },
  questBox: {
    backgroundColor: "rgba(255,255,255,0.5)",
    width: WIDTH_COMPONENT / 3,
    justifyContent: "center",
  },
  questBoxTitle: {
    marginVertical: 8,
    alignSelf: "center",
    backgroundColor: "rgba(25, 25, 150, 0.5)",
    color: colors.yellow,
  },
  questItem: {
    backgroundColor: "rgba(255,255,0,0.5)",
    marginVertical: 3,
    maxWidth: WIDTH_COMPONENT / 3,
    height: HEIGHT_COMPONENT / 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    // overflow: "hidden",
    justifyContent: "space-between",
  },
  questImage: {
    width: SCALE_AVT / 2,
    height: SCALE_AVT / 2,
    borderRadius: SCALE_AVT / 2,
  },
  questInfo: {
    overflow: "hidden",
    backgroundColor: "rgba(2, 5, 255,0.5)",
    width: WIDTH_COMPONENT / 3 / 1.5,
    alignSelf: "center",
  },
  questTitle: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    color: colors.white,
    borderColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(22, 52, 52,0.5)",
  },
  questDesc: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    color: colors.yellow,
    backgroundColor: "rgba(25, 55, 225,0.5)",
  },
  claimed: {
    width: SCALE_AVT / 2,
    height: SCALE_AVT / 2,
  },
});

export default mainStyles;
