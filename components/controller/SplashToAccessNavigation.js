import React, {Component} from "react";
import AccessIndexScreen from "../views/AccessIndexScreen";
import SplashScreen from "../views/SplashScreen";

export default class SplashToAccessNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }

  //waiting 5 seconds and change state by setTimePassed function
  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 4900);
  }

  //Change state by set timePassed value again
  setTimePassed() {
    this.setState({timePassed: true});
  }

  render() {
    if (!this.state.timePassed) {
      return <SplashScreen />;
    } else {
      return <AccessIndexScreen />;
    }
  }
}
