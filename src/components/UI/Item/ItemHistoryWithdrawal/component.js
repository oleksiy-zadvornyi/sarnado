import React from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';

// Components
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';

export default class ItemHistoryWithdrawal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: false,
    };
  }

  onPressTX = () => this.setState({isClick: true});

  render() {
    const {date, size, profit, commission, currency, icon, tx} = this.props;
    const {isClick} = this.state;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap2}>
          <View>
            <Text style={base.text1}>Объем поступления</Text>
            <Text style={base.text2}>{`${profit} ${currency}`}</Text>
            <Text style={[base.text1, base.margin3]}>Комиссия</Text>
            <Text style={base.text2}>{`${commission} ${currency}`}</Text>
          </View>
          <View style={base.flex} />
          <View style={base.wrap3}>
            <View style={base.wrap4}>
              <Text style={[base.text1, base.margin1]}>{size}</Text>
              <Image source={icon} width={wp(9)} />
            </View>
            <Text style={[base.text1, base.margin4]}>{date}</Text>
          </View>
        </View>
        {isClick ? (
          <Text numberOfLines={1} style={base.text4}>
            {tx}
          </Text>
        ) : (
          <ButtonColor
            styleText={base.text3}
            style={base.button1}
            title="показать tx"
            onPress={this.onPressTX}
          />
        )}
      </View>
    );
  }
}
