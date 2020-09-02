import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import InputIcon from '../../UI/Input/InputIcon';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

export default class Deposit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '32XrZRLqeu4GyziSxjF9UamNJtxCeHwAdZ',
    };
  }

  onChangeAddress = (address) => this.setState({address});

  render() {
    const {address} = this.state;

    return (
      <Wrap titleView={<WrapBack title="Пополнение средств" />}>
        <Image style={base.margin1} source={Images.download} width={wp(17.5)} />
        <Text style={base.text1}>Пополнение средств</Text>

        <View style={base.flex} />

        <Text style={base.text2}>Адрес вашего кошелька в системе</Text>
        <InputIcon
          styleText={base.inputText1}
          value={address}
          icon={Images.btc}
          onChangeText={this.onChangeAddress}
        />

        <ButtonColor
          styleText={base.buttonText1}
          style={base.button1}
          title="Копировать"
        />
        <ButtonColor
          styleText={base.buttonText1}
          style={[base.button1, base.button2]}
          title="Обновить адрес"
        />

        <View style={base.flex} />
        <Text style={base.text3}>В данный момент у вас в кошельке</Text>
        <Text style={base.text4}>101,2300889898 BTC</Text>
        <View style={base.flex} />
      </Wrap>
    );
  }
}
