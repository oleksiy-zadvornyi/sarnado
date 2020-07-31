import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef} from '../../../helpers/navigation';
import {TabBar} from './TabBar';

// Screens
import Login from '../../../components/Screens/Auth/Login';
import Registration from '../../../components/Screens/Auth/Registration';
import ChooseTheRide from '../../../components/Screens/Auth/ChooseTheRide';
import BuyTerminal from '../../../components/Screens/Auth/BuyTerminal';
import SellTerminal from '../../../components/Screens/Auth/SellTerminal';
import OpenDealBuy from '../../../components/Screens/Auth/OpenDealBuy';
import OpenDealSell from '../../../components/Screens/Auth/OpenDealSell';
import Wallets from '../../../components/Screens/Auth/Wallets';
import Deposit from '../../../components/Screens/Auth/Deposit';
import Withdrawal from '../../../components/Screens/Auth/Withdrawal';
import Account from '../../../components/Screens/Auth/Account';
import Profile from '../../../components/Screens/Auth/Profile';
import Password from '../../../components/Screens/Auth/Password';
import Referrals from '../../../components/Screens/Auth/Referrals';
import ReferralsCheck from '../../../components/Screens/Auth/ReferralsCheck';
import Notification from '../../../components/Screens/Auth/Notification';
import HistoryDeposit from '../../../components/Screens/Auth/HistoryDeposit';
import HistoryWithdrawal from '../../../components/Screens/Auth/HistoryWithdrawal';

import Step1 from '../../../components/Screens/Auth/Step/Step1';
import Step2 from '../../../components/Screens/Auth/Step/Step2';
import Step3 from '../../../components/Screens/Auth/Step/Step3';
import Step4 from '../../../components/Screens/Auth/Step/Step4';
import Step5 from '../../../components/Screens/Auth/Step/Step5';
import Step6 from '../../../components/Screens/Auth/Step/Step6';
import Step7 from '../../../components/Screens/Auth/Step/Step7';
import Step8 from '../../../components/Screens/Auth/Step/Step8';
import Step9 from '../../../components/Screens/Auth/Step/Step9';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {title: null, gestureEnabled: false};

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
      <Stack.Screen
        name="Withdrawal"
        component={Withdrawal}
        options={options}
      />
      <Stack.Screen
        name="ReferralsCheck"
        component={ReferralsCheck}
        options={options}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={options}
      />
      <Stack.Screen
        name="HistoryDeposit"
        component={HistoryDeposit}
        options={options}
      />
      <Stack.Screen
        name="HistoryWithdrawal"
        component={HistoryWithdrawal}
        options={options}
      />

      <Stack.Screen name="Wallets" component={Wallets} options={options} />
      <Stack.Screen name="Deposit" component={Deposit} options={options} />
      <Stack.Screen name="Account" component={Account} options={options} />
      <Stack.Screen name="Profile" component={Profile} options={options} />
      <Stack.Screen name="Password" component={Password} options={options} />
      <Stack.Screen name="Referrals" component={Referrals} options={options} />

      <Stack.Screen name="Step1" component={Step1} options={options} />
      <Stack.Screen name="Step2" component={Step2} options={options} />
      <Stack.Screen name="Step3" component={Step3} options={options} />
      <Stack.Screen name="Step4" component={Step4} options={options} />
      <Stack.Screen name="Step5" component={Step5} options={options} />
      <Stack.Screen name="Step6" component={Step6} options={options} />
      <Stack.Screen name="Step7" component={Step7} options={options} />
      <Stack.Screen name="Step8" component={Step8} options={options} />
      <Stack.Screen name="Step9" component={Step9} options={options} />
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
