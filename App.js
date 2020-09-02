import React from 'react';
import {YellowBox} from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import ReduxView from './src/store';
import Route from './src/route';
import Toast from './src/components/UI/Base/Toast';
import NetworkIndicator from './src/components/UI/Base/NetworkIndicator';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps has been renamed',
  'Module RCTImageLoader requires',
  '`useNativeDriver` was not specified',
]);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assetsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
      RobotoItalic: require('./assets/fonts/Roboto-Italic.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    });
    this.setState({assetsLoaded: true});
  }

  render() {
    const {assetsLoaded} = this.state;
    if (!assetsLoaded) {
      return <AppLoading />;
    }

    return (
      <ReduxView>
        <NetworkIndicator />
        <Toast />
        <Route />
      </ReduxView>
    );
  }
}
