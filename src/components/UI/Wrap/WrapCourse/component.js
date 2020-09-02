import React from 'react';
import {View, Text} from 'react-native';

// Style
import {base} from './styles';

export default class WrapCourse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {cryptoCurrency, currency, currencyCount} = this.props;

    return (
      <View style={base.wrap1}>
        <Text style={base.text1}>
          {`Продавец установил курс${'\n'}1 ${cryptoCurrency} = ${currencyCount} ${currency}${'\n'}Продолжайте только если он вас устраивает!`}
        </Text>
      </View>
    );
  }
}
