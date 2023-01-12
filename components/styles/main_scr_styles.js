import {StyleSheet, Dimensions} from "react-native";
import fonts from "../../assets/fonts/fonts";
import colors from "../../assets/colors/colors";
import ButtonOpacity from "./Animated/ButtonOpacity";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const WIDTH_COMPONENT = WIDTH - 50;
const HEIGHT_COMPONENT = HEIGHT - 15;

const SCALE_AVT = HEIGHT_COMPONENT / 8;
const COPY_IC = SCALE_AVT / 3;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  indexContainer: {
    flexDirection: "column",
    position: "relative",
  },
  indexTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: WIDTH_COMPONENT,
    height: HEIGHT_COMPONENT / 5,
    overflow: "hidden",
    zIndex: 1000,
    opacity: 1,
    position: "relative",
  },
  indexBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: WIDTH_COMPONENT,
    height: HEIGHT_COMPONENT - HEIGHT_COMPONENT / 5,
    zIndex: 1000,
    opacity: 1,
    position: "relative",

  },
  profileBlock: {
    flexDirection: "column",
    alignItems: "center",
    left: 0,
    height: HEIGHT_COMPONENT / 5,
  },
  blur: {
    position: "absolute",
    width: WIDTH_COMPONENT / 3,
    height: HEIGHT_COMPONENT / 5,
    opacity: 0.3,
  },
  profileInfor: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: WIDTH_COMPONENT / 3,
  },
  profileAvt: {
    overflow: "hidden",
    width: SCALE_AVT,
    height: SCALE_AVT,
    borderRadius: SCALE_AVT,
    borderColor: colors.white,
    borderWidth: 0.5,
    marginHorizontal: (HEIGHT_COMPONENT / 5 / 2) - (SCALE_AVT / 2),
    marginVertical: (HEIGHT_COMPONENT / 5 / 2) - (SCALE_AVT / 2),
    /* Height of top component with screens / 2 and minus half of avatar size thats make avatar center*/
  },
  profileLabel: {
    overflow: "hidden",
    width: "100%",
    height: SCALE_AVT,
    justifyContent: "center",
  },
  profileName: {
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: 15,
  },
  uidCopy: {
    flexDirection: "row",
  },
  profileUid: {
    fontSize: 15,
    fontFamily: fonts.font,
    color: colors.white,
    width: WIDTH_COMPONENT / 5,
  },
  copyIcon: {
    left: WIDTH_COMPONENT / 5.5,
    position: "absolute",
    marginHorizontal: 15,
    width: COPY_IC,
    height: COPY_IC,
  },
  resourceBox: {
    width: WIDTH_COMPONENT - WIDTH_COMPONENT / 2.5,
    height: HEIGHT_COMPONENT / 8,
    right: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  resourceBgBlur: {
    position: "absolute",
    width: WIDTH_COMPONENT - WIDTH_COMPONENT / 2.5,
    height: HEIGHT_COMPONENT / 8,
    opacity: 0.3,
  },
  resourceDataBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    marginHorizontal: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
    flexDirection: "row",
    height: "auto",
    overflow: "hidden",
  },
  resourceIcon: {
    width: SCALE_AVT - SCALE_AVT / 5,
    height: SCALE_AVT - SCALE_AVT / 5,
  },
  valueBox: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: 15,
    overflow: "hidden",
  },
});

export default styles;
