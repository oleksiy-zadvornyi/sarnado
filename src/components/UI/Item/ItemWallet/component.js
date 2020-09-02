import React from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';

// Components
import ButtonColor from '../../Button/ButtonColor';

// Helpers
import * as Images from '../../../../helpers/images';
import {navigate} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class ItemSellTerminal extends React.Component {
  onPressDeposit = () => {
    navigate('Deposit');
  };

  onPressWithdrawal = () => {
    navigate('Withdrawal');
  };

  getIcon = () => {
    const {currency_name} = this.props;
    switch (currency_name) {
      case 'ETH': {
        return Images.iconEth;
      }
      case 'ISA': {
        return Images.iconIsa;
      }
      case 'USDT':
      case 'USDT.ERC20': {
        return Images.iconUsdt;
      }
      case 'XRP': {
        return Images.iconXrp;
      }
      case 'BTC': {
        return Images.iconBtc;
      }
    }
  };

  render() {
    const {available, freezed, currency_name} = this.props;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap2}>
          <View style={base.wrap3}>
            <Text style={base.text1}>Доступно для торгов и вывода</Text>
            <Text
              style={[
                base.text2,
                base.margin1,
              ]}>{`${available} ${currency_name}`}</Text>
            <Text style={base.text1}>Заморожено в ордерах и сделках</Text>
            <Text style={base.text2}>{`${freezed} ${currency_name}`}</Text>
          </View>
          <Image source={this.getIcon()} width={wp(16)} />
        </View>
        <View style={base.wrap4}>
          <ButtonColor
            styleText={base.buttonText1}
            style={base.button1}
            title="Пополнить"
            onPress={this.onPressDeposit}
          />
          <ButtonColor
            styleText={base.buttonText1}
            style={[base.button1, base.button2]}
            title="Вывести"
            onPress={this.onPressWithdrawal}
          />
        </View>
      </View>
    );
  }
}
