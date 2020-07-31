import React from 'react';
import {View, Text, TextInput} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import ButtonColor from '../../../UI/Button/ButtonColor';
import WrapBack from '../../../UI/Wrap/WrapBack';
import WrapWarningSell from '../../../UI/Wrap/WrapWarningSell';
import WrapCourse from '../../../UI/Wrap/WrapCourse';
import InputButtonsText from '../../../UI/Input/InputButtonsText';

// Style
import {base} from './styles';

export default class OpenDealSell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upload: '111,238513242519',
      download: '8004,72',
      message: '',
    };
  }

  onChangeUpload = (upload) => this.setState({upload});
  onChangeDownload = (download) => this.setState({download});
  onChangeMessage = (message) => this.setState({message});

  render() {
    const {upload, download, message} = this.state;
    return (
      <Wrap titleView={<WrapBack />}>
        <View style={base.wrap1}>
          <WrapWarningSell
            cryptoCurrency="USDT"
            currency="RUB"
            userName="fortdeal"
            card="Сбербанк"
          />

          <WrapCourse
            cryptoCurrency="USDT"
            cryptoCount="1"
            currency="RUB"
            currencyCount="71.73"
          />

          <Text style={base.text1}>
            <Text style={base.text2}>Открытие сделки</Text>
            {'\n'}Минимальная сумма сделки 8004.72 RUB{'\n'}Максимальная сумма
            сделки 8004.72 RUB
          </Text>

          <Text style={base.text3}>Вы отправляете</Text>
          <InputButtonsText
            value={upload}
            currency="USDT"
            onChangeText={this.onChangeUpload}
          />

          <Text style={base.text3}>Вы получаете</Text>
          <InputButtonsText
            value={download}
            currency="RUB"
            onChangeText={this.onChangeDownload}
          />

          <Text style={base.text4}>Отправьте сообщение (обязательно)</Text>
          <TextInput
            style={base.text5}
            value={message}
            placeholder="Поздоровайтесь. Мы рекомендуем использовать шифрованные сообщения для отправки платежных данных."
            placeholderTextColor="#5A5A5A"
            multiline
            onChangeText={this.onChangeMessage}
          />
        </View>
        <ButtonColor
          styleTouchable={base.margin1}
          style={base.button1}
          title="Открыть сделку"
        />
        <View style={base.wrap1}>
          <Text style={base.text6}>
            После открытия сделки сообщения шифруются для защиты вашей
            конфиденциальности. Мы сможем их прочесть только в случае инициации
            спора одной из сторон.
          </Text>
        </View>
      </Wrap>
    );
  }
}
