import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import ItemBuyTerminal from '../../UI/Item/ItemBuyTerminal';
import ButtonColor from '../../UI/Button/ButtonColor';
import Sorts from '../../UI/Sort/Sorts';

// Helpers
import {replace} from '../../../helpers/navigation';
import {_fetchError} from '../../../helpers';

//Api
import {getPairs} from '../../../store/api/service';

// Style
import {base} from './styles';

export default class BuyTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [],
      fiat: [],
      directions: [],
      countries: [],
    };
  }

  componentDidMount() {
    const {user, fetchPostOrders, showNetworkIndicator} = this.props;
    const data = {
      type: 'buy',
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
    replace('Step1', {prevProps: {orderType: 'sell'}});
  };

  onChangeSorts = (sorts) => {
    const {user, fetchPostOrders} = this.props;
    const {indexCountry, indexDirection, indexCrypto} = sorts;
    const {crypto, directions, countries} = this.state;
    const data = {
      type: 'buy',
      country: indexCountry >= 0 ? countries[indexCountry].code : null,
      crypto: indexCrypto >= 0 ? crypto[indexCrypto].id : null,
      direction: indexDirection >= 0 ? directions[indexDirection].code : null,
    };
    fetchPostOrders({user, data});
  };

  renderItem = ({item, index}) => <ItemBuyTerminal key={index} {...item} />;

  render() {
    const {orders} = this.props;
    const {crypto, directions, countries} = this.state;

    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь вы можете продать криптовалюту{'\n'}
            или выставить свой ордер на покупку
          </Text>
        </View>
        <Sorts
          crypto={crypto}
          directions={directions}
          countries={countries}
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
          title="Выставить ордер на продажу"
          onPress={this.onPress}
        />
      </Wrap>
    );
  }
}
