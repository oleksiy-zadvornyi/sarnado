import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import ButtonCoin from '../../../../UI/Button/ButtonCoin';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  onPressNext = () => {
    navigate('Step2');
  };

  onPressButton = (index) => this.setState({index});

  render() {
    const {index} = this.state;

    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="1" />

        <Text style={base.text1}>
          Выберите криптовалюту, которую хотели вы бы хотели продать
        </Text>

        {DATA.map((e, i) => (
          <ButtonCoin
            key={i}
            styleTouchable={base.margin1}
            select={index === i + 1}
            index={i + 1}
            currency={e.currency}
            title={e.title}
            icon={e.icon}
            noTintColor={e.noTintColor || false}
            onPress={this.onPressButton}
          />
        ))}

        <View style={base.flex} />

        <WrapStepButtons disabledBack onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
