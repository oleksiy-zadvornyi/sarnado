import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { navigationRef } from "../../../helpers/navigation";
import { TabBar } from "./TabBar";

// Screens
import Login from "../../../components/Screens/Auth/Login";
import Registration from "../../../components/Screens/Auth/Registration";
import ChooseTheRide from "../../../components/Screens/Auth/ChooseTheRide";
import BuyTerminal from "../../../components/Screens/Auth/BuyTerminal";
import SellTerminal from "../../../components/Screens/Auth/SellTerminal";
import OpenDealBuy from "../../../components/Screens/Auth/OpenDealBuy";
import OpenDealSell from "../../../components/Screens/Auth/OpenDealSell";
import Step1 from "../../../components/Screens/Auth/Step/Step1";
import Step2 from "../../../components/Screens/Auth/Step/Step2";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = { title: null };

function Auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={options}
      />
      <Stack.Screen
        name="ChooseTheRide"
        component={ChooseTheRide}
        options={options}
      />
      <Stack.Screen
        name="BuyTerminal"
        component={BuyTerminal}
        options={options}
      />
      <Stack.Screen
        name="SellTerminal"
        component={SellTerminal}
        options={options}
      />
      <Stack.Screen
        name="OpenDealBuy"
        component={OpenDealBuy}
        options={options}
      />
      <Stack.Screen
        name="OpenDealSell"
        component={OpenDealSell}
        options={options}
      />

      <Stack.Screen name="Step1" component={Step1} options={options} />
      <Stack.Screen name="Step2" component={Step2} options={options} />
    </Stack.Navigator>
  );
}

function TabRoute() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Auth" component={Auth} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabRoute;
