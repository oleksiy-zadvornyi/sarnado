import React from 'react';
import {Text, View} from 'react-native';

// Style
import {base} from './styles';

export default class ItemSellTerminal extends React.Component {
  render() {
    const {device, browser, ip, time} = this.props;

    return (
      <View style={base.wrap1}>
        <Text
          style={
            base.text1
          }>{`Новый вход в ваш аккаунт с устройства ${device},${'\n'}браузер: ${browser}, IP: ${ip},${'\n'}время: ${time}`}</Text>
        <Text style={base.text2}>{time}</Text>
      </View>
    );
  }
}
