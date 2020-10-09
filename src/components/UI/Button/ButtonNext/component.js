import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Helpers
import * as Images from '../.././../../helpers/images';

// Style
import {base} from './styles';
import {navigate, replace} from '../../../../helpers/navigation';

export default class ButtonNext extends React.Component {
  onPress = () => {
    const {screen} = this.props;
    if (screen) {
      if (this.props.replace) {
        replace(screen);
      }
      navigate(screen);
    }
  };

  render() {
    const {style, styleTouchable, styleText, title} = this.props;

    return (
      <TouchableOpacity
        style={[base.wrap1, styleTouchable]}
        accessibilityRole="button"
        onPress={this.onPress}>
        <View style={[base.wrap2, style]}>
          <Text style={[base.text1, styleText]}>{title}</Text>
          <View style={base.flex} />
          <Image source={Images.right} height={wp(3)} />
        </View>
      </TouchableOpacity>
    );
  }
}
