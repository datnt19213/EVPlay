import React, {useEffect, useState} from "react";

import clickSfx from "../../assets/sounds/click.wav";
import backgroundSfx from "../../assets/sounds/comfortable_background.wav";
import notifySfx from "../../assets/sounds/complete.wav";

const sounds = {
  click: clickSfx,
  bg: backgroundSfx,
  notify: notifySfx,
};

export default sounds;
