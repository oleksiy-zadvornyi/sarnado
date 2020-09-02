import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import PickerLarge from '../../../../UI/Picker/PickerLarge';
import InputPercent from '../../../../UI/Input/InputPercent';
import InputIcon from '../../../../UI/Input/InputIcon';
import ButtonColor from '../../../../UI/Button/ButtonColor';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';
import {_fetchError, isPositiveNumber} from '../../../../../helpers';

// Api
import {
  postOrderGetExchangeRates,
  postOrderCheckCheckType,
} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Buy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: [],
      indexRate: -1,
      percent: '0',
      indexPercent: -1,
      ownPrice: '',
      errors: [],
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    const {crypto, fiat} = this.props.prevProps;
    showNetworkIndicator(true);
    const data = {
      crypto: crypto.id,
      fiat: fiat.id,
    };
    postOrderGetExchangeRates({data, user})
      .then((result) => this.setState({rates: result.data}))
      .catch((e) => _fetchError(this.props, e, 'postOrderGetExchangeRates'))
      .finally(() => showNetworkIndicator(false));
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {rates, indexRate, percent, indexPercent, ownPrice} = this.state;
    if (indexRate === -1) {
      showToast('Выберите биржу');
      return;
    }
    if (rates[indexRate].is_custom) {
      if (!isPositiveNumber(ownPrice)) {
        showToast('Введите свою цену');
        return;
      }
    } else {
      if (!isPositiveNumber(percent)) {
        showToast('Введите процент моржи');
        return;
      }
      if (indexPercent === -1) {
        showToast('Выберите процент моржи');
        return;
      }
    }

    const type = indexPercent === 0 ? 'loss' : 'profit';
    const data = {
      exchange: rates[indexRate].id,
      percent: !rates[indexRate].is_custom ? percent : null,
      type: !rates[indexRate].is_custom ? type : null,
      price: rates[indexRate].is_custom ? ownPrice : null,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'exchange_rate'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          rate: rates[indexRate],
          percent,
          indexPercent,
          ownPrice,
        };
        this.setState({errors: []});
        navigate('Step4', {prevProps});
      })
      .catch((e) => {
        const errors = _fetchError(this.props, e, 'postOrderGetExchangeRates');
        if (errors) {
          this.setState({errors});
        }
      })
      .finally(() => showNetworkIndicator(false));
  };

  onSelect1 = (e, i) => this.setState({indexRate: i});

  onPressButton1 = () => this.setState({indexPercent: 1});
  onPressButton0 = () => this.setState({indexPercent: 0});

  onChangePercent = (percent) => {
    if (percent.length === 0) {
      this.setState({percent: percent.replace(',', '.')});
    } else if (!isNaN(percent)) {
      if (parseFloat(percent) >= 0) {
        this.setState({percent: percent.replace(',', '.')});
      }
    }
  };

  onChangeOwnPrice = (ownPrice) => {
    if (ownPrice.length === 0) {
      this.setState({ownPrice: ownPrice.replace(',', '.')});
    } else if (!isNaN(ownPrice)) {
      if (parseFloat(ownPrice) >= 0) {
        this.setState({ownPrice: ownPrice.replace(',', '.')});
      }
    }
  };

  getText = () => {
    const {rates, indexRate} = this.state;
    const {crypto, fiat} = this.props.prevProps;
    if (indexRate >= 0) {
      return `${rates[indexRate].name} ${crypto.name}/${fiat.code}.`;
    }
  };

  getSeller = () => {
    const {rates, indexRate} = this.state;
    const {fiat, crypto} = this.props.prevProps;
    if (indexRate >= 0) {
      return `1 ${crypto.name} = ${rates[indexRate].price} ${fiat.code}`;
    }
  };

  getBuyer = () => {
    const {rates, indexRate, percent, indexPercent} = this.state;
    const {fiat, crypto} = this.props.prevProps;
    if (indexRate >= 0 && indexPercent >= 0) {
      if (isPositiveNumber(percent) && parseFloat(percent) >= 0) {
        const price = parseFloat(rates[indexRate].price);
        const p = (price / 100) * parseFloat(percent);
        const sum = indexPercent === 1 ? price + p : price - p;
        return `1 ${crypto.name} = ${sum} ${fiat.code}`;
      }
    }
  };

  renderRate = () => {
    const {
      rates,
      indexRate,
      percent,
      indexPercent,
      ownPrice,
      errors,
    } = this.state;
    if (indexRate >= 0) {
      if (rates[indexRate].is_custom) {
        return (
          <>
            <Text style={base.text2}>
              Вы выбрали: {this.getText()}
              {'\n'}Ваш текущий курс (seller): {this.getSeller()}
              {'\n'}
              Своя цена: {ownPrice}
              {'\n'}Учитывайте, что комиссия сервиса будет снята дополнительно с
              вашего баланса при создании ордера
            </Text>
            <Text style={base.text3}>Своя цена</Text>
            <InputIcon
              keyboardType="numeric"
              returnKeyType="done"
              value={ownPrice}
              hasError={errors.filter((e) => e === 'price').length > 0}
              onChangeText={this.onChangeOwnPrice}
            />
          </>
        );
      }
      return (
        <>
          <Text style={base.text2}>
            Вы выбрали: {this.getText()}
            {'\n'}Ваш текущий курс (seller): {this.getSeller()}
            {'\n'}
            Текущий курс Buyer: {this.getBuyer()}
            {'\n'}Учитывайте, что комиссия сервиса будет снята дополнительно с
            вашего баланса при создании ордера
          </Text>

          <Text style={base.text3}>Выберите процент маржи</Text>
          <InputPercent
            value={percent}
            hasError={errors.filter((e) => e === 'percent').length > 0}
            onChangeText={this.onChangePercent}
          />

          <View style={base.wrap1}>
            <ButtonColor
              style={[base.button1, indexPercent === 1 && base.button2]}
              title="Выше"
              onPress={this.onPressButton1}
            />
            <View style={base.flex} />
            <ButtonColor
              style={[base.button1, indexPercent === 0 && base.button3]}
              title="Ниже"
              onPress={this.onPressButton0}
            />
          </View>

          <Text style={base.text4}>
            Покупатели обычно выбирают маржу примерно на 2% ниже рыночной
          </Text>
        </>
      );
    }
  };

  render() {
    const {rates, indexRate} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на покупку" />}>
        <WrapCircle title="3" />

        <Text style={base.text1}>
          Выберите биржу, откуда система возьмет курс
        </Text>
        <PickerLarge
          data={rates.map((e) => e.name)}
          index={indexRate}
          placeholder="Выбрать биржу"
          onSelect={this.onSelect1}
        />

        {this.renderRate()}

        <View style={base.flex} />
        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
