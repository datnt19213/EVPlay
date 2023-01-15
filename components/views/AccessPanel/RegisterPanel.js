import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../styles/AccessStyle.js";
import colors from "../../../assets/colors/colors";
import ButtonOpacity from "../../styles/Animated/ButtonOpacity";
import Animated from "react-native-reanimated";
import FadeAnim from "../../styles/Animated/FadeAnim";

export default function RegisterPanel() {
  return (
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
          style={styles.inputLogin}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={colors.white}
          style={styles.inputLogin}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor={colors.white}
          style={styles.inputLogin}
        />
        <TouchableOpacity
          style={styles.loginFormBtn}
          activeOpacity={ButtonOpacity.button}
        >
          <Text style={styles.textLoginBtn}>CREATE</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
