import React, {useEffect, useState} from "react";
import {Audio} from "expo-av";

import clickSfx from "../../assets/sounds/click.wav";
import backgroundSfx from "../../assets/sounds/comfortable_background.wav";
import background2Sfx from "../../assets/sounds/comfortable_background_v1.mp3";
import notifySfx from "../../assets/sounds/complete.wav";

const sounds = {
  click: clickSfx,
  bg: backgroundSfx,
  bg2: background2Sfx,
  notify: notifySfx,
};

export default sounds;
