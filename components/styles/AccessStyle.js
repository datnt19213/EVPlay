import {StyleSheet} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../assets/fonts/fonts";
import colors from "../../assets/colors/colors";
import ButtonOpacity from "./Animated/ButtonOpacity";

const WIDTH = hp("100%");
const HEIGHT = wp("100%");

const INPUT_WIDTH = WIDTH / 3;
const INPUT_HEIGHT = HEIGHT / 8;

const FONT_SIZE_1 = INPUT_HEIGHT / 2;
const FONT_SIZE_2 = INPUT_HEIGHT / 2.5;
const FONT_SIZE_3 = INPUT_HEIGHT / 3.5;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  accessImageBackground: {
    width: "100%",
    height: "100%",
  },
  titleLogin: {
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_1,
    color: colors.white,
    alignSelf: "center",
  },
  loginForm: {
    borderColor: colors.yellow,
    borderRightWidth: 1,
    justifyContent: "center",
    height: HEIGHT / 2,
    width: WIDTH / 2.5,
    marginVertical: FONT_SIZE_1,
  },
  inputLogin: {
    borderBottomColor: colors.white,
    fontFamily: fonts.font,
    borderBottomWidth: 1,
    fontSize: FONT_SIZE_3,
    color: colors.white,
    paddingHorizontal: FONT_SIZE_3 / 2,
    marginHorizontal: FONT_SIZE_1,
    marginVertical: FONT_SIZE_3,
  },

  loginFormBtn: {
    width: INPUT_WIDTH / 3,
    height: INPUT_HEIGHT / 1.5,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: FONT_SIZE_2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: colors.yellow,
    shadowColor: colors.darkTransparent,
    shadowOffset: {
      width: 5,
      height: 0,
    },
    elevation: 3,
  },

  txtSubmitFormBtn: {
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: FONT_SIZE_3,
    fontFamily: fonts.font,
  },

  textLoginBtn: {
    justifyContent: "center",
    textAlignVertical: "center",
    color: colors.white,
    fontFamily: fonts.font,
    fontSize: FONT_SIZE_3,
    height: FONT_SIZE_1 * 1.8,
  },

  formAccess: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: INPUT_HEIGHT,
  },
  formAccessBtn: {
    top: INPUT_HEIGHT / 5,
    marginHorizontal: FONT_SIZE_1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginAccessBtn: {
    marginVertical: FONT_SIZE_3 / 3,
    justifyContent: "center",
  },
  RegisterAccessBtn: {
    marginVertical: FONT_SIZE_3 / 3,
    justifyContent: "center",
  },
  HelpAccessBtn: {
    marginVertical: FONT_SIZE_3 / 3,
    justifyContent: "center",
  },

  helpView: {
    fontSize: FONT_SIZE_3,
    fontFamily: fonts.font,
    color: colors.dark,
    paddingHorizontal: INPUT_HEIGHT / 3,
    backgroundColor: colors.white,
  },

  borderRadius: {
    borderRadius: FONT_SIZE_3,
    marginHorizontal: FONT_SIZE_3,
    overflow: "hidden",
  },

  textDeco: {
    textAlign: "justify",
  },

  scrollView: {
    paddingVertical: INPUT_HEIGHT / 5,
  },
});

export default styles;
