import React from 'react';
import {Text, TouchableOpacity, Linking, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';

// Components
import ButtonColor from '../../Button/ButtonColor';

// Helpers
import * as Images from '../../../../helpers/images';

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

  onPressTxn = () => {
    const {txn_id, crypto_code} = this.props;
    if (crypto_code === 'XRP') {
      Linking.openURL(`https://xrpscan.com/tx/${txn_id}`);
    } else {
      Linking.openURL(`https://tokenview.com/ru/search/${txn_id}`);
    }
  };

  getIcon = () => {
    const {crypto_code} = this.props;
    switch (crypto_code) {
      case 'ETH': {
        return Images.iconEth;
      }
      case 'ISA': {
        return Images.iconIsa;
      }
      case 'USDT':
      case 'USDT.ERC20': {
        return Images.iconUsdt;
      }
      case 'XRP': {
        return Images.iconXrp;
      }
      case 'BTC': {
        return Images.iconBtc;
      }
    }
  };

  render() {
    const {amount, crypto_code, fee, created_at, txn_id} = this.props;
    const {isClick} = this.state;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap2}>
          <View>
            <Text style={base.text1}>Объем поступления</Text>
            <Text style={base.text2}>{`${amount} ${crypto_code}`}</Text>
            <Text style={[base.text1, base.margin3]}>Комиссия</Text>
            <Text style={base.text2}>{`${fee} ${crypto_code}`}</Text>
          </View>
          <View style={base.flex} />
          <View style={base.wrap3}>
            <Image source={this.getIcon()} width={wp(9)} />
            <Text style={[base.text1, base.margin4]}>{created_at}</Text>
          </View>
        </View>
        {txn_id &&
          (isClick ? (
            <TouchableOpacity onPress={this.onPressTxn}>
              <Text numberOfLines={1} style={base.text4}>
                {txn_id}
              </Text>
            </TouchableOpacity>
          ) : (
            <ButtonColor
              styleText={base.text3}
              style={base.button1}
              title="показать tx"
              onPress={this.onPressTX}
            />
          ))}
      </View>
    );
  }
}
