import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Components
import Wrap from '../../UI/Base/Wrap';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';
import {replace} from '../../../helpers/navigation';

// Style
import {base} from './styles';

export default class ChooseTheRide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressBuyTerminal = () => {
    replace('BuyTerminal');
  };

  onPressSellTerminal = () => {
    replace('SellTerminal');
  };

  onPressStepBuy = () => {
    replace('Step1', {prevProps: {orderType: 'buy'}});
  };

  onPressStepSell = () => {
    replace('Step1', {prevProps: {orderType: 'sell'}});
  };

  render() {
    return (
      <Wrap>
        <View style={base.flex} />
        <Image source={Images.logo} height={40} />
        <View style={base.flex} />
        <Text style={[base.text1, base.margin2]}>
          Вы можете выбрать варианты для работы с системой. Если требуется
          быстрая сделка, то выберите вариант работы с готовыми ордерами.
        </Text>
        <ButtonColor
          style={base.button1}
          styleTouchable={base.margin1}
          title="Быстро купить криптовалюту"
          onPress={this.onPressStepBuy}
        />
        <ButtonColor
          style={base.button2}
          title="Быстро продать криптовалюту"
          onPress={this.onPressStepSell}
        />
        <View style={base.flex} />
        <Text style={[base.text1, base.margin2]}>
          Если вы хотите выставить свою цену на покупку или продажу, то
          разместите свой ордер
        </Text>
        <ButtonColor
          style={base.button2}
          styleTouchable={base.margin1}
          title="Выставить ордер на продажу"
          onPress={this.onPressSellTerminal}
        />
        <ButtonColor
          style={base.button1}
          title="Выставить ордер на покупку"
          onPress={this.onPressBuyTerminal}
        />
        <View style={base.flex} />
      </Wrap>
    );
  }
}
