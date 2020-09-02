import React from 'react';
import {View, TextInput} from 'react-native';
import Image from 'react-native-scalable-image';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class InputPercent extends React.Component {
  render() {
    const {value, hasError, onChangeText} = this.props;

    return (
      <View style={[base.wrap1, hasError && base.wrap3]}>
        <TextInput
          style={base.text1}
          value={value}
          keyboardType="numeric"
          onChangeText={onChangeText}
          returnKeyType="done"
        />
        <Image source={Images.percent} width={18} />
      </View>
    );
  }
}
