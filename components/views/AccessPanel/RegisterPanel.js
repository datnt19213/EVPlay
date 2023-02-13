// import React from "react";
// import {Text, TextInput, TouchableOpacity, View} from "react-native";
// import styles from "../../styles/AccessStyle.js";
// import colors from "../../../assets/colors/colors.js";
// import ButtonOpacity from "../../styles/Animated/ButtonOpacity.js";
// import Animated from "react-native-reanimated";
// import FadeAnim from "../../styles/Animated/FadeAnim.js";
// import AccessFormNavigation from "../../controller/AccessFormNavigation.js";
// import LoginPanel from "./LoginPanel.js";

// export default function RegisterPanel() {
//   return (
//     <Animated.View
//       key={FadeAnim.regisKey}
//       entering={FadeAnim.enterAnim}
//       exiting={FadeAnim.exitAnim}
//     >
//       <Text style={styles.titleLogin}>CREATE NEW ACCOUNT</Text>
//       <View style={styles.loginForm}>
//         <TextInput
//           placeholder="Username"
//           placeholderTextColor={colors.white}
//           cursorColor={colors.yellow}
//           style={styles.inputLogin}
//         />
//         <TextInput
//           secureTextEntry={true}
//           placeholder="Password"
//           placeholderTextColor={colors.white}
//           cursorColor={colors.yellow}
//           style={styles.inputLogin}
//         />
//         <TextInput
//           secureTextEntry={true}
//           placeholder="Confirm Password"
//           placeholderTextColor={colors.white}
//           cursorColor={colors.yellow}
//           style={styles.inputLogin}
//         />
//         <TouchableOpacity
//           style={styles.loginFormBtn}
//           activeOpacity={ButtonOpacity.button}
//           onPress={LoginPanel}
//         >
//           <Text style={styles.txtSubmitFormBtn}>CREATE</Text>
//         </TouchableOpacity>
//       </View>
//     </Animated.View>
//   );
// }
