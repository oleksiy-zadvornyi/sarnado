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
import * as Images from '../../../../../helpers/images';
import {navigate} from '../../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class Step5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sum: '',
      maxSize: '',
    };
  }

  onPressNext = () => {
    navigate('Step6');
  };

  onChangeSum = (sum) => this.setState({sum});
  onChangeMaxSize = (maxSize) => this.setState({maxSize});

  render() {
    const {sum, maxSize} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="5" />

        <Text style={base.text1}>Количество (BTC)</Text>
        <InputIcon
          value={sum}
          icon={Images.btc}
          keyboardType="numeric"
          onChangeText={this.onChangeSum}
        />

        <Text style={[base.text1, base.margin1]}>
          Укажите максимальный размер сделки (RUB)
        </Text>
        <InputIcon
          value={maxSize}
          icon={Images.btc}
          keyboardType="numeric"
          onChangeText={this.onChangeMaxSize}
        />

        <ButtonColor
          style={base.button1}
          styleTouchable={base.margin1}
          title="Хочу продать одной суммой"
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
