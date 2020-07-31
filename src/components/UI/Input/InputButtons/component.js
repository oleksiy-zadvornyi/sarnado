import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

// Style
import {base} from './styles';

export default class InputButtons extends React.Component {
  render() {
    const {style, value, onChangeText} = this.props;

    return (
      <View style={[base.wrap1, style]}>
        <View style={base.wrap2}>
          <TextInput
            style={base.text1}
            value={value}
            keyboardType="numeric"
            onChangeText={onChangeText}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity style={base.wrap3}>
          <Text style={base.text2}>min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.wrap4}>
          <Text style={base.text3}>max</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
