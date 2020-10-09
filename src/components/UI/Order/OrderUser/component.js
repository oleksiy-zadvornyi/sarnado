import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class OrderUser extends React.Component {
  render() {
    const {name, dispute} = this.props;
    return (
      <View style={base.wrap1}>
        <Text style={base.text1}>Сделка с пользователем {name}</Text>
        {dispute && <Image source={Images.symbol} width={wp(6)} />}
      </View>
    );
  }
}
