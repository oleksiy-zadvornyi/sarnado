import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef} from '../../helpers/navigation';
import {TabBar} from './TabBar';
import TabNavigation from './TabNavigation';

const Tab = createBottomTabNavigator();

export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator tabBar={() => <TabBar />}>
          <Tab.Screen name="TabNavigator" component={TabNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
