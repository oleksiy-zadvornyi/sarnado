import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Style
import {base} from './styles';

export default class OrderTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderTab = (index, tab) => {
    const {tabIndex, onPressTab} = this.props;
    return (
      <TouchableOpacity
        style={[base.wrap2, tabIndex === index && base.wrap3]}
        onPress={() => onPressTab(index)}>
        <Text style={base.text1}>{tab}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={base.wrap1}>
        {this.renderTab(0, 'Детали сделки')}
        {this.renderTab(1, 'Платежные данные')}
        {this.renderTab(2, 'Чат')}
      </View>
    );
  }
}
