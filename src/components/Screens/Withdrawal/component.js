import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import InputIcon from '../../UI/Input/InputIcon';
import InputButtons from '../../UI/Input/InputButtons';
import InputText from '../../UI/Input/InputText';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

export default class Withdrawal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '32XrZRLqeu4GyziSxjF9UamNJtxCeHwAdZ',
      upload: '',
      message: '',
    };
  }

  onChangeAddress = (address) => this.setState({address});
  onChangeUpload = (upload) =>
    this.setState({upload: upload.replace(',', '.')});
  onChangeMessage = (message) => this.setState({message});

  render() {
    const {address, upload, message} = this.state;

    return (
      <Wrap titleView={<WrapBack title=" Вывод средств" />}>
        <Image style={base.margin1} source={Images.upload} width={wp(17.5)} />
        <Text style={base.text1}> Вывод средств</Text>

        <Text style={base.text2}>Адрес кошелька для вывода средств</Text>
        <InputIcon
          styleText={base.inputText1}
          style={base.margin2}
          value={address}
          icon={Images.btc}
          onChangeText={this.onChangeAddress}
        />

        <Text style={base.text2}>Количество на вывод</Text>
        <InputButtons
          style={base.wrap1}
          value={upload}
          onChangeText={this.onChangeUpload}
        />

        <Text style={base.text2}>Количество на вывод</Text>
        <InputText
          styleText={base.inputText1}
          style={base.input1}
          value={message}
          placeholder=""
          placeholderTextColor="#5A5A5A"
          multiline
          onChangeText={this.onChangeMessage}
        />

        <ButtonColor
          styleText={base.buttonText1}
          style={base.button1}
          title="Копировать"
        />

        <View style={base.flex} />
        <Text style={base.text3}>В данный момент у вас в кошельке</Text>
        <Text style={base.text4}>101,2300889898 BTC</Text>
        <View style={base.flex} />
      </Wrap>
    );
  }
}
