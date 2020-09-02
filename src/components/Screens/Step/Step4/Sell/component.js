import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import InputIcon from '../../../../UI/Input/InputIcon';
import ButtonColor from '../../../../UI/Button/ButtonColor';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';
import {_fetchError, isPositiveNumber} from '../../../../../helpers';

// Api
import {getPurseGetAllAmountId} from '../../../../../store/api/purse';
import {postOrderCheckCheckType} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Step4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      errors: [],
    };
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {
      crypto,
      rate,
      percent,
      indexPercent,
      ownPrice,
      orderType,
    } = this.props.prevProps;
    const {amount} = this.state;

    if (!isPositiveNumber(amount)) {
      showToast('Введите количество криптовалюты');
      return;
    }

    const profit_type = indexPercent === 0 ? 'loss' : 'profit';
    const fiat_amount =
      indexPercent === 0
        ? parseFloat(rate.price) -
          (parseFloat(rate.price) / 100) * parseFloat(percent)
        : parseFloat(rate.price) +
          (parseFloat(rate.price) / 100) * parseFloat(percent);
    const data = {
      amount,
      crypto: crypto.id,
      exchange: rate.id,
      fiat_amount: rate.is_custom ? ownPrice : fiat_amount.toString(10),
      percent: !rate.is_custom ? percent : null,
      price: rate.is_custom ? ownPrice : rate.price,
      profit_type,
      type: orderType,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'crypto_amount'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          amount,
        };
        this.setState({errors: []});
        navigate('Step5', {prevProps});
      })
      .catch((e) => {
        const errors = _fetchError(this.props, e, 'postOrderGetExchangeRates');
        if (errors) {
          this.setState({errors});
        }
      })
      .finally(() => showNetworkIndicator(false));
  };

  onChangeText = (amount) => this.setState({amount: amount.replace(',', '.')});

  fetchAmount = () => {
    const {user, showNetworkIndicator} = this.props;
    const {crypto} = this.props.prevProps;
    showNetworkIndicator(true);
    const path = {
      id: crypto.id,
    };
    getPurseGetAllAmountId({path, user})
      .then((result) => this.setState({amount: result.data.amount}))
      .catch((e) => _fetchError(this.props, e, 'getPurseGetAllAmountId'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {amount, errors} = this.state;
    const {crypto} = this.props.prevProps;
    const purse = this.props.purse.filter((e) => e.currency_id === crypto.id);
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="4" />

        <Text style={base.text1}>
          Введите количество которое хотели бы выставить на продажу или
          поставьте на продажу все в один клик
        </Text>
        <Text style={base.text2}>
          Количество ({purse.length > 0 && purse[0].currency_name})
        </Text>
        <InputIcon
          value={amount}
          keyboardType="numeric"
          hasError={errors.filter((e) => e === 'amount').length > 0}
          onChangeText={this.onChangeText}
        />

        <ButtonColor
          style={base.button1}
          styleTouchable={base.margin1}
          title="Продать все доступное количество"
          onPress={this.fetchAmount}
        />
        {purse.length > 0 ? (
          <>
            <Text style={base.text3}>
              В данный момент у вас в кошельке доступно для продажи
            </Text>
            <Text style={base.text4}>
              {purse[0].available} {purse[0].currency_name}
            </Text>
          </>
        ) : (
          <Text style={base.text3}>
            У вас не хватает средств для выставления ордера на продажу
          </Text>
        )}

        <View style={base.flex} />
        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
