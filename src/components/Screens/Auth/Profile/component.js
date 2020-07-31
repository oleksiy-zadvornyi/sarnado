import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import WrapBack from '../../../UI/Wrap/WrapBack';
import WrapIconLabel from '../../../UI/Wrap/WrapIconLabel';
import InputText from '../../../UI/Input/InputText';
import InputTextButton from '../../../UI/Input/InputTextButton';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      email: '',
      phone: '',
      password: '',
      country: '',
      currency: '',
      localBitcoins: '',
    };
  }

  onChangeLogin = (login) => this.setState({login});
  onChangeEmail = (email) => this.setState({email});
  onChangePhone = (phone) => this.setState({phone});
  onChangePassword = (password) => this.setState({password});
  onChangeCountry = (country) => this.setState({country});
  onChangeCurrency = (currency) => this.setState({currency});
  onChangeLocalBitcoins = (localBitcoins) => this.setState({localBitcoins});

  refEmail = (ref) => (this.email = ref);
  refPhone = (ref) => (this.phone = ref);
  refCountry = (ref) => (this.country = ref);
  refCurrency = (ref) => (this.currency = ref);
  refLocalBitcoins = (ref) => (this.localBitcoins = ref);

  nextEmail = () => this.email.focus();
  nextPhone = () => this.phone.focus();
  nextPassword = () => this.password.focus();
  nextCountry = () => this.country.focus();
  nextCurrency = () => this.currency.focus();
  nextLocalBitcoins = () => this.localBitcoins.focus();

  done = () => {};

  render() {
    const {
      login,
      email,
      phone,
      password,
      country,
      currency,
      localBitcoins,
    } = this.state;

    return (
      <Wrap titleView={<WrapBack title="Профиль" />}>
        <View style={base.flex} />

        <WrapIconLabel style={base.wrap1} icon={Images.user} title="Логин" />
        <InputText
          style={base.input1}
          inputStyle={base.inputStyle1}
          title="Логин"
          returnKeyType="next"
          value={login}
          onChangeText={this.onChangeLogin}
          onSubmitEditing={this.nextEmail}
        />

        <WrapIconLabel style={base.wrap1} icon={Images.email} title="Email" />
        <InputText
          ref={this.refEmail}
          style={base.input1}
          title="Email"
          returnKeyType="next"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={this.onChangeEmail}
          onSubmitEditing={this.nextPhone}
        />

        <WrapIconLabel style={base.wrap1} icon={Images.phone} title="Телефон" />
        <InputTextButton
          ref={this.refPhone}
          style={base.input1}
          title="Телефон"
          returnKeyType="next"
          value={phone}
          keyboardType="phone-pad"
          onChangeText={this.onChangePhone}
          onSubmitEditing={this.nextPassword}
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.password}
          title="Пароль"
        />
        <InputTextButton
          ref={this.refPassword}
          style={base.input1}
          title="Пароль"
          returnKeyType="next"
          value={password}
          onChangeText={this.onChangePassword}
          onSubmitEditing={this.nextCountry}
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.country}
          title="Страна"
        />
        <InputTextButton
          ref={this.refCountry}
          style={base.input1}
          title="Страна"
          returnKeyType="next"
          value={country}
          onChangeText={this.onChangeCountry}
          onSubmitEditing={this.nextCurrency}
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.currency}
          title="Валюта"
        />
        <InputTextButton
          ref={this.refCurrency}
          style={base.input1}
          title="Валюта"
          returnKeyType="next"
          value={currency}
          keyboardType="numeric"
          onChangeText={this.onChangeCurrency}
          onSubmitEditing={this.nextLocalBitcoins}
        />

        <WrapIconLabel
          style={base.wrap1}
          icon={Images.logout}
          title="Ваш логин в LocalBitcoins.com"
        />
        <InputTextButton
          ref={this.refLocalBitcoins}
          style={base.input1}
          title="Ваш логин в LocalBitcoins.com"
          returnKeyType="done"
          value={localBitcoins}
          onChangeText={this.onChangeLocalBitcoins}
          onSubmitEditing={this.done}
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
