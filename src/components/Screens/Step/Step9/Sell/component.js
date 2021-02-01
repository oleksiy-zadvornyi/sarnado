import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import ButtonColor from '../../../../UI/Button/ButtonColor/component';

// Helpers
import {goBack, replace} from '../../../../../helpers/navigation';
import {getFrom, getTill, _fetchError} from '../../../../../helpers';

// Api
import {postOrderStore} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Step9 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressNext = () => {
    const {user, showNetworkIndicator} = this.props;
    const {
      crypto,
      fiat,
      direction,
      rate,
      location,
      ownPrice,
      amount,
      percent,
      indexPercent,
      minSize,
      maxSize,
      allSize,
      name,
      description,
      allIndexes,
      indexes,
      orderType,
    } = this.props.prevProps;

    const profit_type = indexPercent === 0 ? 'loss' : 'profit';
    const from = getFrom(indexes);
    const till = getTill(indexes);
    const data = {
      crypto: crypto.id,
      fiat: fiat.id,
      direction: direction.code,
      exchange: rate.id,
      price: rate.is_custom ? ownPrice : rate.price,
      amount,
      percent: !rate.is_custom ? percent : null,
      fee_type: !rate.is_custom ? profit_type : rate.price,
      country: location.country.code,
      state: location.state ? location.state.code : null,
      city: location.city ? location.city.code : null,
      min: !allSize ? minSize : null,
      max: !allSize ? maxSize : null,
      oneTransaction: allSize,
      title: name,
      text: description,
      from: !allIndexes && from ? from.value.start : null,
      till: !allIndexes && till ? till.value.end : null,
      type: orderType,
    };
    showNetworkIndicator(true);
    postOrderStore({user, data})
      .then(() => {
        replace('SellTerminal');
      })
      .catch((e) => _fetchError(this.props, e, 'postOrderStore'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {
      amount,
      percent,
      indexPercent,
      allSize,
      minSize,
      maxSize,
      ownPrice,
      allIndexes,
      indexes,
      crypto,
      location,
      direction,
      fiat,
      rate,
    } = this.props.prevProps;
    const {service_percent} = this.props.profile;
    const from = getFrom(indexes);
    const till = getTill(indexes);
    const fiat_amount =
      indexPercent === 0
        ? parseFloat(rate.price) -
          (parseFloat(rate.price) / 100) * parseFloat(percent)
        : parseFloat(rate.price) +
          (parseFloat(rate.price) / 100) * parseFloat(percent);

    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <View style={base.flex} />
        <Text style={base.text1}>
          Давайте проверим все данные сделки перед размещением
        </Text>
        <View style={base.flex} />

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Вы продаете
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {amount} {crypto.name}
          </Text>
        </View>

        {/* <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Предложение в стране
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {location.country.name}
          </Text>
        </View>

        {location.city && (
          <View style={[base.wrap1, base.wrap2]}>
            <Text numberOfLines={1} style={base.text2}>
              Предложение в городе
            </Text>
            <Text numberOfLines={1} style={[base.text2, base.text3]}>
              {location.city.name}
            </Text>
          </View>
        )} */}

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Способ приема средств
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {direction.name}
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Валюта приема
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {fiat.code} ({fiat.name})
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Процент маржи
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {percent}% {indexPercent === 0 ? 'loss' : 'profit'}
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Мin/Мax сумма сделки
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {allSize ? 'Одной транзакцией' : `${minSize}/${maxSize}`}
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Курс продажи
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {rate.is_custom ? ownPrice : rate.name}
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Время активности
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {!allIndexes && from && till
              ? `${from.time.start} - ${till.time.end}`
              : 'Всегда'}
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Общая сделка на сумму
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {rate.is_custom ? ownPrice : fiat_amount} {rate.fiat_code}
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Процент эскроу сервиса
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            {`${service_percent}% ${
              (parseFloat(amount) / 100) * parseFloat(service_percent)
            } ${crypto.name}`}
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Текущий курс продажи
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            1 {crypto.name} = {rate.price} {rate.fiat_code}
          </Text>
        </View>

        <View style={base.flex} />
        <Text style={base.text4}>
          Внимательно проверьте все данные сделки и если все верно, то
          разместите свой ордер!
        </Text>
        <ButtonColor
          style={base.button1}
          styleText={base.text5}
          title="Предыдущий"
          onPress={goBack}
        />
        <ButtonColor
          style={[base.button1, base.button2]}
          styleText={base.text5}
          title="Разместить ордер"
          onPress={this.onPressNext}
        />
      </Wrap>
    );
  }
}
