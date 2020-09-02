import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from '../../helpers/navigation';

// Screens
import Login from '../../components/Screens/Login';
import Registration from '../../components/Screens/Registration';

const Stack = createStackNavigator();
const options = {title: null, gestureEnabled: false};

export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} options={options} />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
