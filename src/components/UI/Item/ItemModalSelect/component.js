import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// Style
import {base} from './styles';

export default class ItemModalSelect extends React.Component {
  onPress = () => {
    const {index, onPressSelect} = this.props;
    onPressSelect(index);
  };

  render() {
    const {item} = this.props;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text style={base.text1}>{this.props[item]}</Text>
      </TouchableOpacity>
    );
  }
}
