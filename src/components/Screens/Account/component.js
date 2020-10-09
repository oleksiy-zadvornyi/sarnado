import React from 'react';
import {View} from 'react-native';
import Image from 'react-native-scalable-image';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapIconLabel from '../../UI/Wrap/WrapIconLabel';
import ButtonNext from '../../UI/Button/ButtonNext';
import ButtonLogout from '../../UI/Button/ButtonLogout';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

export default class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressLogout = () => {
    const {user, fetchPostLogout} = this.props;

    fetchPostLogout({user});
  };

  render() {
    return (
      <Wrap>
        <View style={base.flex} />
        <Image source={Images.logo} height={40} />
        <View style={base.flex} />

        <WrapIconLabel icon={Images.user} title="Пользователь" />
        <ButtonNext title="Профиль пользователя" screen="Profile" />
        <ButtonNext title="Пароль" screen="Password" />
        <ButtonNext title="Google 2GA" />
        <ButtonNext title="Реферальная программа" screen="Referrals" />
        <ButtonNext title="Оповещения" screen="Notification" />

        <WrapIconLabel icon={Images.finance} title="Финансовые операции" />
        <ButtonNext title="Кошельки" screen="Wallets" />
        <ButtonNext title="История вводов" screen="HistoryDeposit" />
        <ButtonNext title="История выводов" screen="HistoryWithdrawal" />

        <WrapIconLabel icon={Images.transactions} title="Сделки" />
        <ButtonNext title="Активные сделки" screen="ActiveDeals" replace />
        <ButtonNext title="Закрытые сделки" screen="ClosedDeals" replace />

        <WrapIconLabel icon={Images.order} title="Ордера" />
        <ButtonNext title="Активные ордера" screen="ActiveOrders" replace />

        <View style={base.flex} />

        <ButtonLogout title="Выход из системы" onPress={this.onPressLogout} />
      </Wrap>
    );
  }
}
