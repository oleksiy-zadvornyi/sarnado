import React from 'react';
import {Text} from 'react-native';

// Style
import {base} from './styles';

export default class WrapWarningBuy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {cryptoCurrency, currency, userName, card} = this.props;

    return (
      <Text style={base.text1}>
        <Text style={base.text2}>Внимание!</Text>
        {`${'\n'}Вы начинаете процедуру покупки!${'\n'}Вы покупаете `}
        <Text style={base.text2}>{cryptoCurrency}</Text>
        {' у пользователя '}
        <Text style={[base.text2, base.text3]}>{userName}</Text>
        {`${'\n'}переводом ${currency} на карту ${card}`}
      </Text>
    );
  }
}
