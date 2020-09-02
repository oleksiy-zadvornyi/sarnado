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
import {navigate} from '../../../helpers/navigation';

// Style
import {base} from './styles';

export default class Referrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referral: '',
    };
  }

  onChangeReferral = (referral) => this.setState({referral});
  onPressReferralsCheck = () => navigate('ReferralsCheck');

  done = () => {};

  render() {
    const {referral} = this.state;

    return (
      <Wrap titleView={<WrapBack title="Реферальная программа" />}>
        <Image style={base.wrap1} source={Images.referral} width={wp(17.5)} />

        <Text style={base.text1}>
          Реф. программа - это ваша личная программа заработка. Просто
          приглашайте в систему людей и получайте деньги от их торгов. Срок
          работы реферальной ссылки не ограничен! Начисления по ссылке
          пожизненно.
        </Text>

        <Text style={base.text2}>Твоя реферальная ссылка</Text>
        <InputText
          style={base.input1}
          title=""
          editable
          returnKeyType="done"
          value={referral}
          onChangeText={this.onChangeReferral}
          onSubmitEditing={this.done}
        />

        <ButtonColor
          styleTouchable={base.wrap1}
          style={base.wrap2}
          title="Скопировать ссылку"
        />

        <Text style={[base.text1, base.text3]}>
          Подробности о работе реферальной программы вы можете узнать из нашей
          Базы знаний в разделе{' '}
          <Text style={base.text5}>Партнерская программа</Text>
        </Text>

        <View style={base.flex} />
        <ButtonColor
          style={[base.wrap2, base.wrap3]}
          title="Мои рефералы"
          onPress={this.onPressReferralsCheck}
        />
        <View style={base.flex} />

        <Text style={base.text4}>
          Контролируйте начисления и поступления средств, а также следите за
          торгами своих рефералов.
        </Text>
      </Wrap>
    );
  }
}
