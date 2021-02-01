import React from 'react';
import {View, Text} from 'react-native';

// Style
import {base} from './styles';

export default class OrderDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {amount} = this.props;
    const {
      crypto,
      location,
      direction,
      fiat,
      fee,
      limit,
      exchange,
      work_time,
    } = this.props.data;

    return (
      <View style={base.flex}>
        <View style={[base.wrap4, base.wrap5]}>
          <Text numberOfLines={1} style={base.text3}>
            Вы покупаете
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {amount} {crypto.name}
          </Text>
        </View>

        {/* <View style={base.wrap4}>
          <Text numberOfLines={1} style={base.text3}>
            Предложение в стране
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {location.country.name}
          </Text>
        </View>

        {location.city && (
          <View style={[base.wrap4, base.wrap5]}>
            <Text numberOfLines={1} style={base.text3}>
              Предложение в городе
            </Text>
            <Text numberOfLines={1} style={[base.text3, base.text4]}>
              {location.city.name}
            </Text>
          </View>
        )} */}

        <View style={base.wrap4}>
          <Text numberOfLines={1} style={base.text3}>
            Способ приема средств
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {direction.name}
          </Text>
        </View>

        <View style={[base.wrap4, base.wrap5]}>
          <Text numberOfLines={1} style={base.text3}>
            Валюта приема
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {fiat.code} ({fiat.name})
          </Text>
        </View>

        <View style={base.wrap4}>
          <Text numberOfLines={1} style={base.text3}>
            Процент маржи
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {fee.percent}% {fee.type}
          </Text>
        </View>

        <View style={[base.wrap4, base.wrap5]}>
          <Text numberOfLines={1} style={base.text3}>
            Мin/Мax сумма сделки
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {limit.oneTransaction
              ? 'Одной транзакцией'
              : `${limit.minSize}/${limit.maxSize}`}
          </Text>
        </View>

        <View style={base.wrap4}>
          <Text numberOfLines={1} style={base.text3}>
            Курс покупки
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {exchange.is_custom ? exchange.price : exchange.name}
          </Text>
        </View>

        <View style={[base.wrap4, base.wrap5]}>
          <Text numberOfLines={1} style={base.text3}>
            Время активности
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {`${work_time.from} - ${work_time.till}`}
          </Text>
        </View>

        <View style={base.wrap4}>
          <Text numberOfLines={1} style={base.text3}>
            Общая сделка на сумму
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {exchange.is_custom ? exchange.price : amount} {fiat.code}
          </Text>
        </View>

        <View style={[base.wrap4, base.wrap5]}>
          <Text numberOfLines={1} style={base.text3}>
            Процент эскроу сервиса
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            {`${fee.service_percent}% ${
              (parseFloat(amount) / 100) * parseFloat(fee.service_percent)
            } ${crypto.name}`}
          </Text>
        </View>

        <View style={base.wrap4}>
          <Text numberOfLines={1} style={base.text3}>
            Текущий курс покупки
          </Text>
          <Text numberOfLines={1} style={[base.text3, base.text4]}>
            1 {crypto.name} = {exchange.price} {fiat.code}
          </Text>
        </View>
      </View>
    );
  }
}
