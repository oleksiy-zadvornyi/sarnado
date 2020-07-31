import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import PickerLarge from '../../../../UI/Picker/PickerLarge';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';

// Style
import {base} from './styles';

const DATA = ['Text1', 'Text2', 'Text3'];

export default class Step6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picker1: -1,
      picker2: -1,
      picker3: -1,
    };
  }

  onPressNext = () => {
    navigate('Step7');
  };

  onSelect1 = (e, i) => this.setState({picker1: i});
  onSelect2 = (e, i) => this.setState({picker2: i});
  onSelect3 = (e, i) => this.setState({picker3: i});

  render() {
    const {picker1, picker2, picker3} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="6" />

        <Text style={base.text1}>Выберите ваше местоположение</Text>
        <PickerLarge
          style={base.margin1}
          data={DATA}
          index={picker1}
          placeholder="Выбрать страну"
          onSelect={this.onSelect1}
        />
        <PickerLarge
          style={base.margin1}
          data={DATA}
          index={picker2}
          placeholder="Выбрать область"
          onSelect={this.onSelect2}
        />
        <PickerLarge
          style={base.margin1}
          data={DATA}
          index={picker3}
          placeholder="Выбрать город"
          onSelect={this.onSelect3}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          Есть те, кто ищет предложения для продажи в вашей стране, городе,
          регионе. Географическое местоположение, также, помогает системе
          определить подходящий тип предложения, валюту и платежную систему.
          {'\n'}
          {'\n'}
          Также, геолокация позволяет подготовить предложения по сделкам за
          наличный расчет.
        </Text>
        <View style={base.flex} />

        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
