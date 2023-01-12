import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "../../styles/access_styles";
import Animated from "react-native-reanimated";
import FadeAnim from "../../styles/Animated/FadeAnim";

export default function RegisterPanel() {
  return (
    <Animated.View
      key={FadeAnim.helpKey}
      entering={FadeAnim.enterAnim}
      exiting={FadeAnim.exitAnim}
    >
      <Text style={styles.titleLogin}>HELP</Text>
      <View style={styles.loginForm}>
        <ScrollView
          contentContainerStyle={[styles.helpView, styles.scrollView]}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vitae, veritatis iste exercitationem corporis eaque. Laborum
            voluptates, voluptatibus nobis eaque architecto debitis recusandae
            quia cum maxime, at incidunt quas eum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis, expedita voluptas,
            dignissimos veritatis voluptates vitae unde a possimus optio neque
            nihil. Nam, alias vero. Facere velit corporis laborum modi
            inventore? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis eligendi in explicabo dolorem ipsam cupiditate ullam
            perferendis molestias fugiat hic dicta aliquid id deleniti sapiente,
            perspiciatis error est incidunt mollitia. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Tempore illum voluptates non
            officiis optio. Repudiandae mollitia nisi, doloribus modi fuga quam
            omnis placeat velit inventore eligendi. Aperiam delectus error
            ullam.
          </Text>
        </ScrollView>
      </View>
    </Animated.View>
  );
}
