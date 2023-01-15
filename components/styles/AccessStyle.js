import {StyleSheet, Dimensions} from "react-native";
import fonts from "../../assets/fonts/fonts";
import colors from "../../assets/colors/colors";
import ButtonOpacity from "./Animated/ButtonOpacity";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  accessImageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  titleLogin: {
    fontFamily: fonts.font,
    fontSize: WIDTH / 30,
    color: colors.white,
    alignSelf: "center",
    marginBottom: 15,
  },
  loginForm: {
    borderColor: colors.yellow,
    borderRightWidth: 1,
    paddingVertical: 15,
    height: HEIGHT / 2,
    width: WIDTH / 2.5,
  },
  inputLogin: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    fontSize: 15,
    color: colors.white,
    paddingHorizontal: 8,
    marginHorizontal: 30,
    marginVertical: 15,
  },

  loginFormBtn: {
    backgroundColor: colors.greenLight,
    marginVertical: 15,
    marginHorizontal: 8,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 5,
    borderRadius: 30,
  },

  textLoginBtn: {
    justifyContent: "center",
    color: colors.white,
    fontSize: 15,
  },

  formAccess: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 50,
  },
  formAccessBtn: {
    marginHorizontal: 30,
  },
  loginAccessBtn: {
    marginVertical: 8,
  },
  RegisterAccessBtn: {
    marginVertical: 8,
  },
  HelpAccessBtn: {
    marginVertical: 8,
  },

  helpView: {
    textAlign: "justify",
    fontSize: 15,
    color: colors.dark,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
    // borderRadius: 15,
    height: HEIGHT / 2.5,
  },

  scrollView: {
    height: "auto",
    paddingVertical: 10,
  },
});

export default styles;
