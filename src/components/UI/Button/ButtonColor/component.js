import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Style
import {base} from './styles';

export default class ButtonColor extends React.Component {
  render() {
    const {style, styleTouchable, styleText, title, onPress} = this.props;

    return (
      <TouchableOpacity
        style={styleTouchable}
        accessibilityRole="button"
        onPress={onPress}>
        <View style={[base.wrap, style]}>
          <View style={base.flex} />
          <Text style={[base.text1, styleText]}>{title}</Text>
          <View style={base.flex} />
        </View>
      </TouchableOpacity>
    );
  }
}
