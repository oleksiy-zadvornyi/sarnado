import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import ItemActiveOrder from '../../UI/Item/ItemActiveOrder';
import Sorts from '../../UI/Sort/Sorts';
import ButtonColor from '../../UI/Button/ButtonColor';
import ModalAlert from '../../UI/Modal/ModalAlert';

// Helpers
import {_fetchError} from '../../../helpers';

//Api
import {getPairs} from '../../../store/api/service';
import {
  getOrdersGetActive,
  patchOrderCancelId,
} from '../../../store/api/orders';

// Style
import {base} from './styles';

export default class ActiveOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [],
      directions: [],
      orders: [],
      isVisible: false,
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
    getOrdersGetActive({user, path})
      .then((result) => this.setState({orders: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getOrdersGetActive'))
      .finally(() => showNetworkIndicator(false));
  }

  onChangeSorts = (sorts) => {
    const {user, showNetworkIndicator} = this.props;
    const {indexDirection, indexCrypto} = sorts;
    const {crypto, directions} = this.state;
    const data = {
      type: 'buy',
      crypto: indexCrypto >= 0 ? crypto[indexCrypto].id : null,
      direction: indexDirection >= 0 ? directions[indexDirection].code : null,
    };
    const path = {
      crypto: indexCrypto >= 0 ? crypto[indexCrypto].id : null,
    };
    showNetworkIndicator(true);
    getOrdersGetActive({user, path})
      .then((result) => this.setState({orders: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getOrdersGetActive'))
      .finally(() => showNetworkIndicator(false));
  };

  onPressItem = (id) => {
    const {user, showNetworkIndicator} = this.props;
    const {orders} = this.state;
    const path = {id};
    showNetworkIndicator(true);
    patchOrderCancelId({user, path})
      .then(() => this.setState({orders: orders.filter((e) => e.id !== id)}))
      .catch((e) => _fetchError(this.props, e, 'patchOrderCancelId'))
      .finally(() => showNetworkIndicator(false));
  };

  onPressYes = () => {
    const {user, fetchPatchSettingsPublicOrdersVisibility} = this.props;
    this.onPressHide();
    fetchPatchSettingsPublicOrdersVisibility({user});
  };

  onPressShow = () => this.setState({isVisible: true});
  onPressHide = () => this.setState({isVisible: false});

  renderItem = ({item, index}) => (
    <ItemActiveOrder key={index} {...item} onPressItem={this.onPressItem} />
  );

  render() {
    const {orders, isVisible} = this.state;
    const {crypto, directions} = this.state;
    const {show_public_orders} = this.props.profile;

    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь находятся ваши ордера.{'\n'}Вы можете отменить их или скрыть
            от пользователей.
          </Text>
        </View>
        <Sorts
          crypto={crypto}
          directions={directions}
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
          title={
            show_public_orders
              ? 'Скрыть от пользователей'
              : 'Показать пользователям'
          }
          style={show_public_orders ? base.button2 : base.button1}
          styleText={base.buttonText1}
          onPress={this.onPressShow}
        />

        <ModalAlert
          isVisible={isVisible}
          onPressHide={this.onPressHide}
          onPressYes={this.onPressYes}
          textBody={
            show_public_orders
              ? 'Вы хотите открыть все свои ордера для показа пользователям? Обычно это используют, когда находятся у терминала и готовы к активным торгам.'
              : 'Вы хотите скрыть все свои ордера от пользователей? Обычно это используют, когда не могут торговать в какой-то момент.'
          }
          textYes={show_public_orders ? 'Да, открываем' : 'Да, скрываем'}
          textNo="Нет"
        />
      </Wrap>
    );
  }
}
