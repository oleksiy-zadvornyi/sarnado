import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Style
import {base} from './styles';

export default class ButtonTime extends React.Component {
  onPress = () => {
    const {index, select, onPress} = this.props;
    onPress(index, select);
  };

  render() {
    const {
      style,
      styleTouchable,
      styleText,
      disabled,
      select,
      timeOfDay,
      time,
      icon,
    } = this.props;

    if (select) {
      return (
        <TouchableOpacity
          style={styleTouchable}
          accessibilityRole="button"
          disabled={disabled}
          onPress={this.onPress}>
          <View style={[base.wrap2, style]}>
            <Text style={[base.text2, styleText]}>{timeOfDay}</Text>
            <View style={base.flex} />
            <Text
              style={[
                base.text2,
                styleText,
              ]}>{`C ${time.start} до ${time.end}`}</Text>
            <View style={base.flex} />
            <Image style={base.tintColor2} source={icon} width={wp(5)} />
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={styleTouchable}
        accessibilityRole="button"
        disabled={disabled}
        onPress={this.onPress}>
        <View style={[base.wrap1, style]}>
          <Text style={[base.text1, styleText]}>{timeOfDay}</Text>
          <View style={base.flex} />
          <Text
            style={[
              base.text1,
              styleText,
            ]}>{`C ${time.start} до ${time.end}`}</Text>
          <View style={base.flex} />
          <Image style={base.tintColor1} source={icon} width={wp(5)} />
        </View>
      </TouchableOpacity>
    );
  }
}
