import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Helpers
import * as Images from '../../../../helpers/images';
import {goBack} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class WrapBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {title} = this.props;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap3}>
          <TouchableOpacity style={base.wrap2} onPress={goBack}>
            <Image source={Images.left} height={wp(3)} />
            <View style={base.wrap3}>
              <Text style={base.text1}>Назад</Text>
            </View>
          </TouchableOpacity>
          <View style={base.flex} />
          <Text style={base.text2}>{title}</Text>
        </View>
      </View>
    );
  }
}
