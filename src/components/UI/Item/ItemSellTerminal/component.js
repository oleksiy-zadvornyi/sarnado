import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ScalableImage from 'react-native-scalable-image';

// Components
import Rating from '../../Rating';
import ButtonColor from '../../Button/ButtonColor';

// Helpers
import * as Images from '../../../../helpers/images';
import {navigate} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class ItemSellTerminal extends React.Component {
  onPress = () => {
    navigate('OpenDealBuy');
  };

  render() {
    const {
      isOnline,
      isVerify,
      name,
      icon,
      rating,
      country,
      method,
      size,
      limit,
      course,
      currency,
    } = this.props;
    return (
      <TouchableOpacity style={base.wrap1} onPress={this.onPress}>
        <View style={base.wrap2}>
          <View style={isOnline ? base.wrap3 : base.wrap4} />
          <Image
            style={base.image1}
            source={icon ? {uri: icon} : Images.icon}
          />
          <View style={base.wrap5}>
            <Text style={base.text1}>{name}</Text>
            <Text style={isVerify ? base.text2 : base.text3}>
              {isVerify ? 'Верифицирован' : 'Не верифицирован'}
            </Text>
          </View>
          <View style={base.flex} />
          <Rating value={rating} />
          <Text style={base.text4}>{country}</Text>
        </View>
        <View style={base.wrap6}>
          <View style={base.wrap7}>
            <Text style={base.text5}>Способ</Text>
            <Text style={base.text5}>Объем</Text>
            <Text style={base.text5}>Лимиты</Text>
            <Text style={base.text5}>Курс</Text>
          </View>
          <View style={base.wrap8}>
            <Text style={base.text6}>{method}</Text>
            <View style={base.wrap9}>
              <Text style={base.text7}>{size} BTC</Text>
            </View>
            <Text
              style={
                base.text5
              }>{`${limit.min} - ${limit.max} ${currency}`}</Text>
            <Text style={base.text5}>{`${course} ${currency}`}</Text>
          </View>
          <ScalableImage
            style={base.image2}
            source={Images.bitcoin}
            width={wp(17)}
          />
        </View>
        <ButtonColor
          title="Продать"
          style={base.button1}
          styleText={base.buttonText1}
        />
      </TouchableOpacity>
    );
  }
}
