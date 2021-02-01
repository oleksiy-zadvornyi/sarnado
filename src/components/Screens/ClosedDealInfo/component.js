import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';

// Helpers
import {_fetchError} from '../../../helpers';

//Api
import {getDealsGetCompleted} from '../../../store/api/deal';

// Style
import {base} from './styles';

export default class ClosedDealInfo extends React.Component {
  constructor(props) {
    super(props);

    const id = props.route.params?.id ?? 0;
    this.state = {
      id,
      deal: null,
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    const {id} = this.state;

    const path = {
      id,
    };
    showNetworkIndicator(true);
    getDealsGetCompleted({path, user})
      .then((result) => this.setState({deal: result.data.deal}))
      .catch((e) => _fetchError(this.props, e, 'getDealsGetCompleted'))
      .finally(() => showNetworkIndicator(false));
  }

  render() {
    const {id, deal} = this.state;
    return (
      <Wrap>
        <WrapBack title={`Сделка №${id}`} />

        {deal && (
          <View style={base.flex}>
            <View style={[base.wrap4, base.wrap5]}>
              <Text numberOfLines={1} style={base.text3}>
                Вы покупаете
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.start_amount} {deal.data.crypto.name}
              </Text>
            </View>

            <View style={base.wrap4}>
              <Text numberOfLines={1} style={base.text3}>
                Предложение в стране
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.location.country.name}
              </Text>
            </View>

            {/* {deal.data.location.city && (
              <View style={[base.wrap4, base.wrap5]}>
                <Text numberOfLines={1} style={base.text3}>
                  Предложение в городе
                </Text>
                <Text numberOfLines={1} style={[base.text3, base.text4]}>
                  {deal.data.location.city.name}
                </Text>
              </View>
            )} */}

            <View style={base.wrap4}>
              <Text numberOfLines={1} style={base.text3}>
                Способ приема средств
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.direction.name}
              </Text>
            </View>

            <View style={[base.wrap4, base.wrap5]}>
              <Text numberOfLines={1} style={base.text3}>
                Валюта приема
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.fiat.code} ({deal.data.fiat.name})
              </Text>
            </View>

            <View style={base.wrap4}>
              <Text numberOfLines={1} style={base.text3}>
                Процент маржи
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.fee.percent}% {deal.fee.type}
              </Text>
            </View>

            <View style={[base.wrap4, base.wrap5]}>
              <Text numberOfLines={1} style={base.text3}>
                Мin/Мax сумма сделки
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.limit.oneTransaction
                  ? 'Одной транзакцией'
                  : `${deal.data.limit.minSize}/${deal.data.limit.maxSize}`}
              </Text>
            </View>

            <View style={base.wrap4}>
              <Text numberOfLines={1} style={base.text3}>
                Курс покупки
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.exchange.is_custom
                  ? deal.data.exchange.price
                  : deal.data.exchange.name}
              </Text>
            </View>

            <View style={[base.wrap4, base.wrap5]}>
              <Text numberOfLines={1} style={base.text3}>
                Время активности
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {`${deal.data.work_time.from} - ${deal.data.work_time.till}`}
              </Text>
            </View>

            <View style={base.wrap4}>
              <Text numberOfLines={1} style={base.text3}>
                Общая сделка на сумму
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {deal.data.exchange.is_custom
                  ? deal.data.exchange.price
                  : deal.data.start_amount}{' '}
                {deal.data.fiat.code}
              </Text>
            </View>

            <View style={[base.wrap4, base.wrap5]}>
              <Text numberOfLines={1} style={base.text3}>
                Процент эскроу сервиса
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                {`${deal.fee.service_percent}% ${
                  (parseFloat(deal.data.start_amount) / 100) *
                  parseFloat(deal.fee.service_percent)
                } ${deal.data.crypto.name}`}
              </Text>
            </View>

            <View style={base.wrap4}>
              <Text numberOfLines={1} style={base.text3}>
                Текущий курс покупки
              </Text>
              <Text numberOfLines={1} style={[base.text3, base.text4]}>
                1 {deal.data.crypto.name} = {deal.data.exchange.price}{' '}
                {deal.data.fiat.code}
              </Text>
            </View>
          </View>
        )}
      </Wrap>
    );
  }
}
