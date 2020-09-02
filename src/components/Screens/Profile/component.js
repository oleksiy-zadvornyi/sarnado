import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import WrapIconLabel from '../../UI/Wrap/WrapIconLabel';
import InputText from '../../UI/Input/InputText';
import InputTextButton from '../../UI/Input/InputTextButton';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    const {phone, location, fiat, local_btc_account} = props.profile;
    this.state = {
      phone: phone || '',
      country: location.country || '',
      currency: fiat || '',
      localBitcoins: local_btc_account || '',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile.phone !== prevProps.profile.phone) {
      this.onChangePhone(this.props.profile.phone);
    }
    if (this.props.profile.location !== prevProps.profile.location) {
      this.onChangeCountry(this.props.profile.location.country);
    }
    if (this.props.profile.fiat !== prevProps.profile.fiat) {
      this.onChangeCurrency(this.props.profile.fiat);
    }
    if (
      this.props.profile.local_btc_account !==
      prevProps.profile.local_btc_account
    ) {
      this.onChangeLocalBitcoins(this.props.profile.local_btc_account);
    }
  }

  onChangePhone = (phone) => this.setState({phone});
  onChangeCountry = (country) => this.setState({country});
  onChangeCurrency = (currency) => this.setState({currency});
  onChangeLocalBitcoins = (localBitcoins) => this.setState({localBitcoins});

  render() {
    const {name, email} = this.props.profile;
    const {phone, country, currency, localBitcoins} = this.state;

    return (
      <Wrap titleView={<WrapBack title="Профиль" />}>
        <View style={base.flex} />

        <WrapIconLabel style={base.wrap1} icon={Images.user} title="Логин" />
        <InputText
          style={base.input1}
          inputStyle={base.inputStyle1}
          title="Логин"
          value={name}
          editable={false}
        />

        <WrapIconLabel style={base.wrap1} icon={Images.email} title="Email" />
        <InputText
          style={base.input1}
          title="Email"
          value={email}
          editable={false}
        />

        <WrapIconLabel style={base.wrap1} icon={Images.phone} title="Телефон" />
        <InputTextButton
          style={base.input1}
          title="Телефон"
          value={phone}
          type="phone"
          keyboardType="phone-pad"
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.password}
          title="Пароль"
        />
        <InputTextButton style={base.input1} title="Пароль" type="password" />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.country}
          title="Страна"
        />
        <InputTextButton
          style={base.input1}
          title="Страна"
          type="country"
          value={country}
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.currency}
          title="Валюта"
        />
        <InputTextButton
          style={base.input1}
          title="Валюта"
          type="fiat"
          value={currency}
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.logout}
          title="Ваш логин в LocalBitcoins.com"
        />
        <InputTextButton
          style={base.input1}
          title="Ваш логин в LocalBitcoins.com"
          type="localBitcoins"
          value={localBitcoins}
        />

        <View style={base.flex} />
        <Text style={base.text1}>
          Мы настоятельно рекомендуем подтвердить свой номер телефона. Номер
          вашего телефона может понадобиться при утере данных для доступа и их
          последующего восстановления. Также, вы можете использовать мобильные
          оповещения для дополнительной безопасности вашего аккаунта.
        </Text>
        <View style={base.flex} />
      </Wrap>
    );
  }
}
