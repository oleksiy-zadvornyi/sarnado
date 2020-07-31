import React from 'react';
import {View, TextInput} from 'react-native';
import Image from 'react-native-scalable-image';

// Style
import {base} from './styles';

export default class InputIcon extends React.Component {
  render() {
    const {
      value,
      style,
      styleText,
      icon,
      keyboardType,
      returnKeyType,
      onChangeText,
    } = this.props;

    return (
      <View style={[base.wrap1, style]}>
        <TextInput
          style={[base.text1, styleText]}
          value={value}
          keyboardType={keyboardType ? keyboardType : 'default'}
          returnKeyType={returnKeyType ? returnKeyType : 'done'}
          onChangeText={onChangeText}
        />
        <Image style={base.tintColor1} source={icon} width={32} />
      </View>
    );
  }
}
