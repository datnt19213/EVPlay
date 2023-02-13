import React, {useState} from "react";

import Login from "../views/AccessPanel/LoginPanel.js";
import Register from "../views/AccessPanel/RegisterPanel.js";
import Help from "../views/AccessPanel/HelpPanel.js";
import InteractData from "../data/InteractData.js";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import styles from "../styles/AccessStyle.js";
import ButtonOpacity from "../styles/Animated/ButtonOpacity.js";
import Animated from "react-native-reanimated";
import FadeAnim from "../styles/Animated/FadeAnim.js";
import colors from "../../assets/colors/colors.js";
import SFX from "../data/SFX.js";
import {Audio} from "expo-av";

export default function AccessFormNavigation() {
  const [loginIsShow, setLoginIsShow] = useState(InteractData.show);
  const [regisIsShow, setRegisIsShow] = useState(InteractData.hide);
  const [helpIsShow, setHelpIsShow] = useState(InteractData.hide);

  const loginPress = (event) => {
    setLoginIsShow(InteractData.show);
    setRegisIsShow(InteractData.hide);
    setHelpIsShow(InteractData.hide);

    playSound();
  };

  const regisPress = (event) => {
    setLoginIsShow(InteractData.hide);
    setRegisIsShow(InteractData.show);
    setHelpIsShow(InteractData.hide);
  };

  const helpPress = (event) => {
    setLoginIsShow(InteractData.hide);
    setRegisIsShow(InteractData.hide);
    setHelpIsShow(InteractData.show);
  };

  const [sound, setSound] = React.useState();
  async function playSound() {
    const {sound} = await Audio.Sound.createAsync(SFX.click);
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.formAccess}>
      {/* Login */}
      {loginIsShow && <Login />}

      {/* Register */}

      {regisIsShow && (
        <Animated.View
          key={FadeAnim.regisKey}
          entering={FadeAnim.enterAnim}
          exiting={FadeAnim.exitAnim}
        >
          <Text style={styles.titleLogin}>CREATE NEW ACCOUNT</Text>
          <View style={styles.loginForm}>
            <TextInput
              placeholder="Username"
              placeholderTextColor={colors.white}
              cursorColor={colors.yellow}
              style={styles.inputLogin}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={colors.white}
              cursorColor={colors.yellow}
              style={styles.inputLogin}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Confirm Password"
              placeholderTextColor={colors.white}
              cursorColor={colors.yellow}
              style={styles.inputLogin}
            />
            <TouchableOpacity
              style={styles.loginFormBtn}
              activeOpacity={ButtonOpacity.button}
              onPress={loginPress}
            >
              <Text style={styles.txtSubmitFormBtn}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      {/* Help */}
      {helpIsShow && <Help />}

      {/* Navigation Side tab */}

      <View style={styles.formAccessBtn}>
        <TouchableOpacity
          style={styles.loginAccessBtn}
          activeOpacity={ButtonOpacity.button}
          onPress={loginPress}
        >
          <Text style={styles.textLoginBtn}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.RegisterAccessBtn}
          activeOpacity={ButtonOpacity.button}
          onPress={regisPress}
        >
          <Text style={styles.textLoginBtn}>Create new account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.HelpAccessBtn}
          activeOpacity={ButtonOpacity.button}
          onPress={helpPress}
        >
          <Text style={styles.textLoginBtn}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
