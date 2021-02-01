import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import ItemSellTerminal from '../../UI/Item/ItemSellTerminal';
import ButtonColor from '../../UI/Button/ButtonColor';
import Sorts from '../../UI/Sort/Sorts';

// Helpers
import {replace} from '../../../helpers/navigation';
import {_fetchError} from '../../../helpers';

//Api
import {getPairs} from '../../../store/api/service';

// Style
import {base} from './styles';

export default class SellTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [],
      fiat: [],
      directions: [],
    };
  }

  componentDidMount() {
    const {user, fetchPostOrders, showNetworkIndicator} = this.props;
    const data = {
      type: 'sell',
      show_auth_user_orders: false,
    };
    fetchPostOrders({user, data});
    showNetworkIndicator(true);
    getPairs({user})
      .then((result) => this.setState({...result.data}))
      .catch((e) => _fetchError(this.props, e, 'getPairs'))
      .finally(() => showNetworkIndicator(false));
  }

  onPress = () => {
    replace('Step1', {prevProps: {orderType: 'buy'}});
  };

  onChangeSorts = (sorts) => {
    const {user, fetchPostOrders} = this.props;
    const {indexFiat, indexDirection, indexCrypto} = sorts;
    const {crypto, directions, fiat} = this.state;
    const data = {
      type: 'sell',
      fiat: indexFiat >= 0 ? fiat[indexFiat].code : null,
      crypto: indexCrypto >= 0 ? crypto[indexCrypto].id : null,
      direction: indexDirection >= 0 ? directions[indexDirection].code : null,
    };
    fetchPostOrders({user, data});
  };

  renderItem = ({item, index}) => <ItemSellTerminal key={index} {...item} />;

  render() {
    const {orders} = this.props;
    const {crypto, directions, fiat} = this.state;

    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь вы можете купить криптовалюту{'\n'}или выставить свой ордер на
            продажу
          </Text>
        </View>
        <Sorts
          crypto={crypto}
          directions={directions}
          fiat={fiat}
          onChange={this.onChangeSorts}
        />

        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <ButtonColor
          style={base.button1}
          title="Выставить ордер на покупку"
          onPress={this.onPress}
        />
      </Wrap>
    );
  }
}
