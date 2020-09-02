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
      editable,
      hasError,
      keyboardType,
      returnKeyType,
      onChangeText,
    } = this.props;

    return (
      <View style={[base.wrap1, hasError && base.wrap3, style]}>
        <TextInput
          style={[base.text1, styleText]}
          value={value}
          editable={editable}
          keyboardType={keyboardType ? keyboardType : 'default'}
          returnKeyType={returnKeyType ? returnKeyType : 'done'}
          onChangeText={onChangeText}
        />
        {icon && <Image style={base.tintColor1} source={icon} width={32} />}
      </View>
    );
  }
}
