import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

// Style
import {base} from './styles';

export default class InputButtonsText extends React.Component {
  render() {
    const {
      style,
      value,
      currency,
      onChangeText,
      onPressMin,
      onPressMax,
    } = this.props;

    return (
      <View style={[base.wrap1, style]}>
        <TouchableOpacity style={base.wrap2} onPress={onPressMin}>
          <Text style={base.text1}>min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.wrap3} onPress={onPressMax}>
          <Text style={base.text2}>max</Text>
        </TouchableOpacity>
        <View style={base.wrap4}>
          <TextInput
            style={base.text3}
            value={value}
            keyboardType="numeric"
            onChangeText={onChangeText}
            returnKeyType="done"
          />
        </View>
        <View style={base.wrap5}>
          <Text style={base.text4}>{currency}</Text>
        </View>
      </View>
    );
  }
}
