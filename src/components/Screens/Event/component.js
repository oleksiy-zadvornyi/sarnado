import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import InputText from '../../UI/Input/InputText';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

export default class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };
  }

  onChangeCode = (code) => this.setState({code});

  done = () => {};

  render() {
    const {code} = this.state;

    return (
      <Wrap noScroll titleView={<WrapBack title="Событие" />}>
        <InputText
          style={base.input1}
          title="Пин код"
          value={code}
          secureTextEntry
          onChangeText={this.onChangeCode}
          onSubmitEditing={this.done}
        />
        <ButtonColor
          styleTouchable={base.wrap1}
          style={base.wrap2}
          title="Подтвердить"
          onPress={this.done}
        />
      </Wrap>
    );
  }
}
