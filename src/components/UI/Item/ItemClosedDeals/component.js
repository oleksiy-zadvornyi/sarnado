import React from 'react';
import {Text, View, Image} from 'react-native';
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

export default class ItemClosedDeals extends React.Component {
  onPress = () => {
    navigate('ClosedDealInfo', {id: this.props.id});
  };

  renderVerify = () => {
    const {email_verified_at, phone_verified_at} = this.props.counterpart;
    if (email_verified_at) {
      return <Text style={base.text2}>Верифицирован</Text>;
    }
    if (phone_verified_at) {
      return <Text style={base.text8}>Частично верифицирован</Text>;
    }
    return <Text style={base.text3}>Не верифицирован</Text>;
  };

  render() {
    const {amount, status, price} = this.props;
    const {crypto, location, direction, limit, fiat} = this.props.data;
    const {is_online, photo_url, user_rating, name} = this.props.counterpart;
    const rating = Math.round(user_rating.total / user_rating.liked / 0.2);

    return (
      <View style={base.wrap1}>
        <View style={base.wrap2}>
          <View style={is_online ? base.wrap3 : base.wrap4} />
          <Image
            style={base.image1}
            source={photo_url ? {uri: photo_url} : Images.icon}
          />
          <View style={base.wrap5}>
            <Text style={base.text1}>{name}</Text>
            {this.renderVerify()}
          </View>
          <View style={base.flex} />
          <Rating value={rating} />
          <Text style={base.text4}>{location.country.name}</Text>
        </View>
        <View style={base.wrap6}>
          <View style={base.wrap7}>
            <Text style={base.text5}>Способ</Text>
            <Text style={base.text5}>Объем</Text>
            <Text style={base.text5}>Лимиты</Text>
            <Text style={base.text5}>Курс</Text>
          </View>
          <View style={base.wrap8}>
            <Text style={base.text6}>{direction.name}</Text>
            <View style={base.wrap9}>
              <Text style={base.text7}>
                {amount} {crypto.code}
              </Text>
            </View>
            {limit.oneTransaction ? (
              <Text style={base.text5}>Одной сделкой</Text>
            ) : (
              <Text
                style={
                  base.text5
                }>{`${limit.min} - ${limit.max} ${fiat.code}`}</Text>
            )}

            <Text style={base.text5}>{`${price} ${fiat.code}`}</Text>
          </View>
          <ScalableImage
            style={base.image2}
            source={Images.bitcoin}
            width={wp(17)}
          />
        </View>
        <ButtonColor
          title="Информация"
          style={status === 'completed' ? base.button1 : base.button2}
          styleText={base.buttonText1}
          onPress={this.onPress}
        />
      </View>
    );
  }
}
