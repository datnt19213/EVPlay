import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../styles/AccessStyle.js";
import colors from "../../../assets/colors/colors.js";
import ButtonOpacity from "../../styles/Animated/ButtonOpacity.js";
import SFX from "../../data/SFX.js";
import Animated from "react-native-reanimated";
import FadeAnim from "../../styles/Animated/FadeAnim.js";
import {useNavigation} from "@react-navigation/native";
import {Audio} from "expo-av";

export default function RegisterPanel() {
  const navigation = useNavigation();

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
    <Animated.View
      key={FadeAnim.loginKey}
      entering={FadeAnim.enterAnim}
      exiting={FadeAnim.exitAnim}
      style={styles.login}
    >
      <Text style={styles.titleLogin}>LOGIN</Text>
      <View style={styles.loginForm}>
        <TextInput
          placeholder="Username"
          textContentType="username"
          placeholderTextColor={colors.white}
          cursorColor={colors.yellow}
          style={styles.inputLogin}
        />
        <TextInput
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
          placeholderTextColor={colors.white}
          cursorColor={colors.yellow}
          style={styles.inputLogin}
        />
        <TouchableOpacity
          style={styles.loginFormBtn}
          activeOpacity={ButtonOpacity.button}
          onPress={() => {
            playSound();
            navigation.navigate("LoadScreen");
          }}
        >
          <Text style={styles.txtSubmitFormBtn}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
