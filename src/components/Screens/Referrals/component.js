import React from 'react';
import {View, Text, Clipboard} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import InputText from '../../UI/Input/InputText';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';
import {replace} from '../../../helpers/navigation';

// Api
import {URL} from '../../../store/api';

// Style
import {base} from './styles';

export default class Referrals extends React.Component {
  onPressReferralsCheck = () => replace('ReferralsCheck');

  onPressClipboard = async () => {
    const {showToast} = this.props;
    const {id} = this.props.profile;
    await Clipboard.setString(`${URL}/register?ref=${id}`);
    showToast('Реферальная ссылка скопирована');
  };

  render() {
    const {id} = this.props.profile;
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
          editable={false}
          returnKeyType="done"
          value={`${URL}/register?ref=${id}`}
        />

        <ButtonColor
          styleTouchable={base.wrap1}
          style={base.wrap2}
          title="Скопировать ссылку"
          onPress={this.onPressClipboard}
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
