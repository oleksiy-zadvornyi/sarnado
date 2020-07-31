import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import PickerLarge from '../../../../UI/Picker/PickerLarge';
import InputPercent from '../../../../UI/Input/InputPercent';
import ButtonColor from '../../../../UI/Button/ButtonColor';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';

// Style
import {base} from './styles';

const DATA = ['Text1', 'Text2', 'Text3'];

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picker1: -1,
      percent: '',
      index: -1,
    };
  }

  onPressNext = () => {
    navigate('Step4');
  };

  onSelect1 = (e, i) => this.setState({picker1: i});

  onPressButton1 = () => this.setState({index: 0});
  onPressButton2 = () => this.setState({index: 1});

  onChangePercent = (percent) => {
    if (percent.length === 0) {
      this.setState({percent});
    } else if (!isNaN(percent)) {
      if (parseFloat(percent) >= 0) {
        this.setState({percent});
      }
    }
  };

  render() {
    const {picker1, percent, index} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="3" />

        <Text style={base.text1}>
          Выберите биржу, откуда система возьмет курс
        </Text>
        <PickerLarge
          data={DATA}
          index={picker1}
          placeholder="Выбрать биржу"
          onSelect={this.onSelect1}
        />

        <Text style={base.text2}>
          Вы выбрали: Bitfinex BTC/RUB.{'\n'}Ваш текущий курс (seller): 1 BTC =
          630488.1286515 RUB{'\n'}Текущий курс Buyer:{'\n'}Учитывайте, что
          комисия сервиса будет снята дополнительно с вашего баланса при
          создании ордера
        </Text>

        <Text style={base.text3}>Выберите процент маржи</Text>
        <InputPercent value={percent} onChangeText={this.onChangePercent} />

        <View style={base.wrap1}>
          <ButtonColor
            style={[base.button1, index === 0 && base.button2]}
            title="Выше"
            onPress={this.onPressButton1}
          />
          <View style={base.flex} />
          <ButtonColor
            style={[base.button1, index === 1 && base.button3]}
            title="Ниже"
            onPress={this.onPressButton2}
          />
        </View>

        <Text style={base.text4}>
          Продавцы обычно выбирают маржу примерно на 2% выше рыночной
        </Text>

        <View style={base.flex} />
        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
