import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import ButtonTime from '../../../../UI/Button/ButtonTime';
import ButtonColor from '../../../../UI/Button/ButtonColor';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import * as Images from '../../../../../helpers/images';
import {navigate} from '../../../../../helpers/navigation';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class Step7 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexes: [],
      all: false,
    };
  }

  onPressNext = () => {
    navigate('Step8');
  };

  onPressButton = (index, select) => {
    const {indexes} = this.state;
    if (select) {
      this.setState({
        indexes: indexes.filter((e) => e !== index),
      });
    } else {
      this.setState({
        indexes: [...indexes, index],
      });
    }
  };

  onPressAll = () => {
    const {all} = this.state;
    this.setState({all: !all});
  };

  render() {
    const {indexes, all} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="7" />

        <Text style={base.text1}>
          Выберите время или интервалы в которое вы будете активно реагировать
          на заявки
        </Text>

        {DATA.map((e, i) => (
          <ButtonTime
            key={i}
            disabled={all}
            styleTouchable={base.margin1}
            timeOfDay={e.timeOfDay}
            time={e.time}
            icon={Images.time}
            index={i + 1}
            select={indexes.filter((el) => el === i + 1).length > 0 && !all}
            onPress={this.onPressButton}
          />
        ))}

        <ButtonColor
          styleTouchable={base.margin1}
          style={[base.button1, all && base.buttonSelect1]}
          styleText={[base.buttonText1, all && base.buttonTextSelect1]}
          title="Круглосуточно"
          onPress={this.onPressAll}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          В это время или интервалы, ваши ордера будут доступны пользователям и
          будут отображаться в терминале. Во время, когда вы недоступны - ордера
          будут скрыты.
        </Text>
        <View style={base.flex} />

        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
