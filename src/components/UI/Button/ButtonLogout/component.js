import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class ButtonLogout extends React.Component {
  render() {
    const {style, styleTouchable, styleText, title} = this.props;

    return (
      <TouchableOpacity
        style={[base.wrap1, styleTouchable]}
        accessibilityRole="button"
        onPress={this.onPress}>
        <View style={[base.wrap2, style]}>
          <View style={base.flex} />
          <Image source={Images.logout} width={wp(4)} />
          <Text style={[base.text1, styleText]}>{title}</Text>
          <View style={base.flex} />
        </View>
      </TouchableOpacity>
    );
  }
}
