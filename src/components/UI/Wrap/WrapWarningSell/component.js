import React from 'react';
import {Text} from 'react-native';

// Style
import {base} from './styles';

export default class WrapWarningSell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {cryptoCurrency, currency, userName, card} = this.props;

    return (
      <Text style={base.text1}>
        <Text style={base.text2}>Внимание!</Text>
        {`${'\n'}Вы начинаете процедуру продажи!${'\n'}Вы продаете `}
        <Text style={base.text2}>{cryptoCurrency}</Text>
        {' покупателю '}
        <Text style={[base.text2, base.text3]}>{userName}</Text>
        {`${'\n'}ожидая перевод ${currency} на карту ${card}`}
      </Text>
    );
  }
}
