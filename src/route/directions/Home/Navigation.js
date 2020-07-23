import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Helpers
import {navigationRef} from '../../../helpers/navigation';

// Screens
import ChooseTheRide from '../../../components/Screens/Home/ChooseTheRide';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    height: 0,
  },
  headerLeft: null,
};

const options = {title: null};

function Root() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="ChooseTheRide"
          component={ChooseTheRide}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
