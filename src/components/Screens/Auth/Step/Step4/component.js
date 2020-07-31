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

export default class Step4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onPressNext = () => {
    navigate('Step5');
  };

  onChangeText = (value) => this.setState({value});

  render() {
    const {value} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="4" />

        <Text style={base.text1}>
          Введите количество которое хотели бы выставить на продажу или
          поставьте на продажу все в один клик
        </Text>

        <Text style={base.text2}>Количество (BTC)</Text>
        <InputIcon
          value={value}
          icon={Images.btc}
          keyboardType="numeric"
          onChangeText={this.onChangeText}
        />

        <ButtonColor
          style={base.button1}
          styleTouchable={base.margin1}
          title="Продать все доступное количество"
        />
        <Text style={base.text3}>
          В данный момент у вас в кошельке доступно для продажи
        </Text>
        <Text style={base.text4}>101,2300889898 BTC</Text>

        <View style={base.flex} />
        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
