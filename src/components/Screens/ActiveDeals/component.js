import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import ItemActiveDeals from '../../UI/Item/ItemActiveDeals';
import Sorts from '../../UI/Sort/Sorts';

// Helpers
import {_fetchError} from '../../../helpers';

//Api
import {getPairs} from '../../../store/api/service';
import {getDealsGetActive} from '../../../store/api/deal';

// Style
import {base} from './styles';

export default class ActiveDeals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [],
      fiat: [],
      directions: [],
      countries: [],
      orders: [],
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;

    showNetworkIndicator(true);
    showNetworkIndicator(true);
    getPairs({user})
      .then((result) => this.setState({...result.data}))
      .catch((e) => _fetchError(this.props, e, 'getPairs'))
      .finally(() => showNetworkIndicator(false));

    const path = {};
    getDealsGetActive({user, path})
      .then((result) => this.setState({orders: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getDealsGetActive'))
      .finally(() => showNetworkIndicator(false));
  }

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

  renderItem = ({item, index}) => <ItemActiveDeals key={index} {...item} />;

  render() {
    const {orders} = this.state;
    const {crypto, fiat} = this.state;

    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>Здесь находятся ваши активные сделки</Text>
        </View>
        <Sorts crypto={crypto} fiat={fiat} onChange={this.onChangeSorts} />

        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Wrap>
    );
  }
}
