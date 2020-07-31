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

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picker1: -1,
      picker2: -1,
    };
  }

  onPressNext = () => {
    navigate('Step3');
  };

  onSelect1 = (e, i) => this.setState({picker1: i});
  onSelect2 = (e, i) => this.setState({picker2: i});

  render() {
    const {picker1, picker2} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="2" />

        <Text style={base.text1}>
          Каким способом вы хотите продать криптовалюту?
        </Text>
        <PickerLarge
          data={DATA}
          index={picker1}
          placeholder="Как будете получать?"
          onSelect={this.onSelect1}
        />

        <Text style={[base.text1, base.margin1]}>
          В какой валюте вы хотите получить перевод?
        </Text>
        <PickerLarge
          data={DATA}
          index={picker2}
          placeholder="Выберите валюту"
          onSelect={this.onSelect2}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          Обязательно учитывайте возможность приема средств в выбраной валюте Не
          все банки по умолчанию принимают разную валюту, во многих для этого
          необходимо открыть соотвествующий тип счета
        </Text>
        <View style={base.flex} />
        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
