import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Components
import Wrap from '../../UI/Base/Wrap';
import InputText from '../../UI/Input/InputText';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';
import {navigate, goBack} from '../../../helpers/navigation';

// Api
import {postRegister} from '../../../store/api/user';

// Style
import {base} from './styles';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  onChangeLogin = (name) => this.setState({name});
  onChangeEmail = (email) => this.setState({email});
  onChangePassword = (password) => this.setState({password});
  onChangeRePassword = (password_confirmation) =>
    this.setState({password_confirmation});

  refEmail = (ref) => (this.email = ref);
  refPassword = (ref) => (this.password = ref);
  refRePassword = (ref) => (this.rePassword = ref);

  nextEmail = () => this.email.focus();
  nextPassword = () => this.password.focus();
  nextRePassword = () => this.rePassword.focus();

  done = () => {
    const {showToast, showNetworkIndicator} = this.props;
    const {name, email, password, password_confirmation} = this.state;
    if (name.length === 0) {
      showToast('Введите логин');
      return;
    }
    if (email.length === 0) {
      showToast('Введите Email');
      return;
    }
    if (password.length === 0) {
      showToast('Введите пароль');
      return;
    }
    if (password !== password_confirmation) {
      showToast('Пароли не совпадают');
      return;
    }

    const data = {
      name,
      email,
      password,
      password_confirmation,
      ref: null,
    };
    showNetworkIndicator(true);
    postRegister({data})
      .then(goBack)
      .catch((e) => console.log(e.response))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {name, email, password, password_confirmation} = this.state;
    return (
      <Wrap>
        <View style={base.flex} />
        <Image source={Images.logo} height={40} />
        <View style={base.flex} />
        <Text style={base.text1}>
          Приветствуем вас на эскроу-сервисе!{'\n'}Здесь вы можете купить и
          продать криптовалюту таким же пользователям как и вы, а мы сделаем
          так, чтобы сделка прошла без проблем!
        </Text>
        <View style={base.flex} />
        <InputText
          style={base.input1}
          title="Login"
          returnKeyType="next"
          value={name}
          onChangeText={this.onChangeLogin}
          onSubmitEditing={this.nextEmail}
        />
        <InputText
          ref={this.refEmail}
          style={base.input1}
          title="Email"
          keyboardType="email-address"
          returnKeyType="next"
          textContentType="emailAddress"
          value={email}
          onChangeText={this.onChangeEmail}
          onSubmitEditing={this.nextPassword}
        />
        <InputText
          style={base.input1}
          ref={this.refPassword}
          title="Password"
          textContentType="password"
          value={password}
          secureTextEntry
          returnKeyType="next"
          onChangeText={this.onChangePassword}
          onSubmitEditing={this.nextRePassword}
        />
        <InputText
          style={base.input1}
          ref={this.refRePassword}
          title="Password"
          textContentType="password"
          value={password_confirmation}
          secureTextEntry
          returnKeyType="done"
          onChangeText={this.onChangeRePassword}
          onSubmitEditing={this.done}
        />
        <ButtonColor
          style={base.button1}
          title="Зарегистрироваться"
          onPress={this.done}
        />
        <View style={base.flex} />
        <Text style={base.text3}>
          Если у вас еще нет аккаунта,{'\n'}то пройдите простую регистрацию
        </Text>
      </Wrap>
    );
  }
}
