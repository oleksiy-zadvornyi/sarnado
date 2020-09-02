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
import {postOrderCheckCheckType} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Sell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minSize: '',
      maxSize: '',
      allSize: false,
      errors: [],
    };
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {minSize, maxSize, allSize} = this.state;
    const {
      amount,
      rate,
      percent,
      indexPercent,
      ownPrice,
    } = this.props.prevProps;

    if (!allSize) {
      if (!isPositiveNumber(minSize)) {
        showToast('Введите минимальный размер сделки');
        return;
      }
      if (!isPositiveNumber(maxSize)) {
        showToast('Введите максимальный размер сделки');
        return;
      }
    }

    const profit_type = indexPercent === 0 ? 'loss' : 'profit';
    const data = {
      amount,
      exchange: rate.id,
      min: !allSize ? minSize : null,
      max: !allSize ? maxSize : null,
      oneTransaction: allSize,
      price: rate.is_custom ? ownPrice : rate.price,
      percent: !rate.is_custom ? percent : null,
      profit_type,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'limits'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          minSize,
          maxSize,
          allSize,
        };
        this.setState({errors: []});
        navigate('Step6', {prevProps});
      })
      .catch((e) => {
        const errors = _fetchError(this.props, e, 'postOrderGetExchangeRates');
        if (errors) {
          this.setState({errors});
        }
      })
      .finally(() => showNetworkIndicator(false));
  };

  onPressAllSize = () => {
    const {allSize} = this.state;
    if (!allSize) {
      this.setState({allSize: !allSize, minSize: '', maxSize: ''});
    } else {
      this.setState({allSize: !allSize});
    }
  };

  onChangeMinSize = (minSize) =>
    this.setState({minSize: minSize.replace(',', '.')});
  onChangeMaxSize = (maxSize) =>
    this.setState({maxSize: maxSize.replace(',', '.')});

  render() {
    const {minSize, maxSize, allSize, errors} = this.state;
    const {fiat} = this.props.prevProps;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="5" />

        <Text style={base.text1}>
          Укажите минимальный размер сделки ({fiat.code})
        </Text>
        <InputIcon
          value={minSize}
          editable={!allSize}
          keyboardType="numeric"
          hasError={errors.filter((e) => e === 'min').length > 0}
          onChangeText={this.onChangeMinSize}
        />

        <Text style={[base.text1, base.margin1]}>
          Укажите максимальный размер сделки ({fiat.code})
        </Text>
        <InputIcon
          value={maxSize}
          editable={!allSize}
          keyboardType="numeric"
          hasError={errors.filter((e) => e === 'max').length > 0}
          onChangeText={this.onChangeMaxSize}
        />

        <ButtonColor
          style={[base.button1, allSize && base.button2]}
          styleTouchable={base.margin1}
          title="Хочу продать одной суммой"
          onPress={this.onPressAllSize}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          Если вы выставляете Min и Max суммы, то вы позволяете выкупить ваш
          ордер частями, т.е. провести сделки с несколькими пользователями. Если
          вы продаете одной суммой, то вы заключите сделку с одним
          пользователем, который купит у вас все.{'\n'}
          {'\n'}* также, учитывайте возможности вашего счета на прием средств.
          Если вы не знаете лимиты на прием, то лучше их узнать у вашего банка
          или платежной системы.
        </Text>
        <View style={base.flex} />

        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
