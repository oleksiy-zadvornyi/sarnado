import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import ReduxView from "./src/store";
import Route from "./src/route";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assetsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
      RobotoItalic: require("./assets/fonts/Roboto-Italic.ttf"),
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;
    if (!assetsLoaded) {
      return <AppLoading />;
    }

    return (
      <ReduxView>
        <Route />
      </ReduxView>
    );
  }
}
