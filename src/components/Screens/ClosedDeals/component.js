import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import ItemClosedDeals from '../../UI/Item/ItemClosedDeals';
import Sorts from '../../UI/Sort/Sorts';

// Helpers
import {_fetchError} from '../../../helpers';

//Api
import {getPairs} from '../../../store/api/service';
import {getDealsGetClosed} from '../../../store/api/deal';

// Style
import {base} from './styles';

export default class ClosedDeals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [],
      fiat: [],
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
    getDealsGetClosed({user, path})
      .then((result) => this.setState({orders: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getDealsGetClosed'))
      .finally(() => showNetworkIndicator(false));
  }

  onChangeSorts = (sorts) => {
    const {user, showNetworkIndicator} = this.props;
    const {indexFiat, indexCrypto} = sorts;
    const {crypto, fiat} = this.state;
    const data = {
      type: 'buy',
      fiat: indexFiat >= 0 ? fiat[indexFiat].code : null,
      crypto: indexCrypto >= 0 ? crypto[indexCrypto].id : null,
    };
    const path = {
      crypto: indexCrypto >= 0 ? crypto[indexCrypto].id : null,
    };
    showNetworkIndicator(true);
    getDealsGetClosed({user, path})
      .then((result) => this.setState({orders: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getDealsGetClosed'))
      .finally(() => showNetworkIndicator(false));
  };

  renderItem = ({item, index}) => <ItemClosedDeals key={index} {...item} />;

  render() {
    const {orders} = this.state;
    const {crypto, fiat} = this.state;

    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>Здесь находятся ваши закрытые сделки</Text>
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
