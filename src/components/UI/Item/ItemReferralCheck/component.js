import React from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';

// Components
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';

export default class ItemReferralCheck extends React.Component {
  render() {
    const {login, date, amount, size, profit, currency, icon} = this.props;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap2}>
          <Image style={base.wrap3} source={icon} width={wp(13)} />
          <View style={base.wrap4}>
            <Text style={base.text1}>{login}</Text>
            <Text style={base.text2}>{date}</Text>
          </View>
          <View style={base.flex} />
          <View>
            <Text style={base.text3}>Количество/Объем сделок</Text>
            <Text style={base.text4}>{`${amount}/${size}${currency}`}</Text>

            <Text style={[base.text3, base.margin1]}>Начисления</Text>
            <Text style={base.text4}>{`${profit}${currency}`}</Text>
          </View>
        </View>
        <ButtonColor
          styleText={base.text5}
          style={base.wrap5}
          title="Подробнее"
        />
      </View>
    );
  }
}
