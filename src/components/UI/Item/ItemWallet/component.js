import React from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';

// Components
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';
import {navigate} from '../../../../helpers/navigation';

export default class ItemSellTerminal extends React.Component {
  onPressDeposit = () => {
    navigate('Deposit');
  };

  onPressWithdrawal = () => {
    navigate('Withdrawal');
  };

  render() {
    const {available, frozen, currency, icon} = this.props;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap2}>
          <View style={base.wrap3}>
            <Text style={base.text1}>Доступно для торгов и вывода</Text>
            <Text
              style={[
                base.text2,
                base.margin1,
              ]}>{`${available} ${currency}`}</Text>
            <Text style={base.text1}>Заморожено в ордерах и сделках</Text>
            <Text style={base.text2}>{`${frozen} ${currency}`}</Text>
          </View>
          <Image source={icon} width={wp(16)} />
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
