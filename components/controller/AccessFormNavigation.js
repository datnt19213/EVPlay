import React, {useState} from "react";

import Login from "../views/AccessPanel/LoginPanel";
import Register from "../views/AccessPanel/RegisterPanel";
import Help from "../views/AccessPanel/HelpPanel";
import InteractData from "../data/InteractData";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "../styles/AccessStyle";
import ButtonOpacity from "../styles/Animated/ButtonOpacity";

export default function AccessFormNavigation() {
  const [loginIsShow, setLoginIsShow] = useState(InteractData.show);
  const [regisIsShow, setRegisIsShow] = useState(InteractData.hide);
  const [helpIsShow, setHelpIsShow] = useState(InteractData.hide);

  const loginPress = (event) => {
    setLoginIsShow(InteractData.show);
    setRegisIsShow(InteractData.hide);
    setHelpIsShow(InteractData.hide);
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

  return (
    <View style={styles.formAccess}>
      {loginIsShow && <Login />}
      {regisIsShow && <Register />}
      {helpIsShow && <Help />}

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
