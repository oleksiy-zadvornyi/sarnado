import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Image from "react-native-scalable-image";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
// Style
import { base } from "./styles";

export default class ButtonCoin extends React.Component {
  render() {
    const {
      style,
      styleTouchable,
      styleText,
      select,
      currency,
      title,
      icon,
      noTintColor,
      onPress,
    } = this.props;

    if (select) {
      return (
        <TouchableOpacity
          style={styleTouchable}
          accessibilityRole="button"
          onPress={onPress}
        >
          <View style={[base.wrap2, style]}>
            <Text style={[base.text2, styleText]}>{currency}</Text>
            <View style={base.flex} />
            <Text style={[base.text2, styleText]}>{title}</Text>
            <View style={base.flex} />
            <Image
              style={!noTintColor && base.tintColor2}
              source={icon}
              width={wp(8)}
            />
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={styleTouchable}
        accessibilityRole="button"
        onPress={onPress}
      >
        <View style={[base.wrap1, style]}>
          <Text style={[base.text1, styleText]}>{currency}</Text>
          <View style={base.flex} />
          <Text style={[base.text1, styleText]}>{title}</Text>
          <View style={base.flex} />
          <Image
            style={!noTintColor && base.tintColor1}
            source={icon}
            width={wp(8)}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
