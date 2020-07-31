import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Style
import {base} from './styles';

export default class WrapIconLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {style, icon, title} = this.props;

    return (
      <View style={[base.wrap1, style]}>
        <View style={base.wrap2}>
          <Image style={base.wrap3} source={icon} height={wp(4)} />
        </View>
        <Text style={base.text1}>{title}</Text>
      </View>
    );
  }
}
