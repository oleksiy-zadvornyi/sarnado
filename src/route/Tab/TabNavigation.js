import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ChooseTheRide from '../../components/Screens/ChooseTheRide';
import BuyTerminal from '../../components/Screens/BuyTerminal';
import SellTerminal from '../../components/Screens/SellTerminal';
import OpenDealBuy from '../../components/Screens/OpenDealBuy';
import OpenDealSell from '../../components/Screens/OpenDealSell';
import Wallets from '../../components/Screens/Wallets';
import Deposit from '../../components/Screens/Deposit';
import Withdrawal from '../../components/Screens/Withdrawal';
import Account from '../../components/Screens/Account';
import Profile from '../../components/Screens/Profile';
import Password from '../../components/Screens/Password';
import Referrals from '../../components/Screens/Referrals';
import ReferralsCheck from '../../components/Screens/ReferralsCheck';
import Notification from '../../components/Screens/Notification';
import HistoryDeposit from '../../components/Screens/HistoryDeposit';
import HistoryWithdrawal from '../../components/Screens/HistoryWithdrawal';
import Chat from '../../components/Screens/Chat';
import ActiveDeals from '../../components/Screens/ActiveDeals';
import ClosedDeals from '../../components/Screens/ClosedDeals';
import ActiveOrders from '../../components/Screens/ActiveOrders';

import Step1 from '../../components/Screens/Step/Step1';
import Step2 from '../../components/Screens/Step/Step2';
import Step3 from '../../components/Screens/Step/Step3';
import Step4 from '../../components/Screens/Step/Step4';
import Step5 from '../../components/Screens/Step/Step5';
import Step6 from '../../components/Screens/Step/Step6';
import Step7 from '../../components/Screens/Step/Step7';
import Step8 from '../../components/Screens/Step/Step8';
import Step9 from '../../components/Screens/Step/Step9';

const Stack = createStackNavigator();
const options = {title: null, gestureEnabled: false};

export default class TabNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
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
        <Stack.Screen
          name="Referrals"
          component={Referrals}
          options={options}
        />
        <Stack.Screen
          name="ActiveDeals"
          component={ActiveDeals}
          options={options}
        />
        <Stack.Screen
          name="ClosedDeals"
          component={ClosedDeals}
          options={options}
        />
        <Stack.Screen
          name="ActiveOrders"
          component={ActiveOrders}
          options={options}
        />

        <Stack.Screen name="Wallets" component={Wallets} options={options} />
        <Stack.Screen name="Deposit" component={Deposit} options={options} />
        <Stack.Screen name="Account" component={Account} options={options} />
        <Stack.Screen name="Profile" component={Profile} options={options} />
        <Stack.Screen name="Password" component={Password} options={options} />
        <Stack.Screen name="Chat" component={Chat} options={options} />

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
}
