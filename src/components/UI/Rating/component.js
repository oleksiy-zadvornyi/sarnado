import React from 'react';
import {View} from 'react-native';
import Image from 'react-native-scalable-image';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

const array = [1, 1, 1, 1, 1];

export default class Rating extends React.Component {
  render() {
    const {value} = this.props;
    return (
      <View style={base.wrap1}>
        {array.map((e, i) => (
          <Image
            key={i}
            source={i <= value - 1 ? Images.selectStar : Images.unselectStar}
            height={14}
          />
        ))}
      </View>
    );
  }
}
