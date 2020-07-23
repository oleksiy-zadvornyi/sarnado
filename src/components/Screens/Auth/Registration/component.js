import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Components
import Wrap from '../../../UI/Base/Wrap';
import InputText from '../../../UI/Input/InputText';
import ButtonColor from '../../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../../helpers/images';
import {navigate} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  onChangeLogin = (login) => this.setState({login});
  onChangeEmail = (email) => this.setState({email});
  onChangePassword = (password) => this.setState({password});
  onChangeRePassword = (password) => this.setState({password});

  refPassword = (ref) => (this.password = ref);
  refRePassword = (ref) => (this.rePassword = ref);
  nextPassword = () => this.password.focus();
  nextRePassword = () => this.rePassword.focus();
  nextEmail = () => this.email.focus();

  done = () => {};

  render() {
    const {login, email, password} = this.state;
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
          value={login}
          onChangeText={this.onChangeLogin}
          onSubmitEditing={this.nextEmail}
        />
        <InputText
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
          value={password}
          secureTextEntry
          returnKeyType="done"
          onChangeText={this.onChangeRePassword}
          onSubmitEditing={this.done}
        />
        <ButtonColor
          style={base.button1}
          title="Зарегистрироваться"
          onPress={() => navigate('ChooseTheRide')}
        />
        <View style={base.flex} />
        <Text style={base.text3}>
          Если у вас еще нет аккаунта,{'\n'}то пройдите простую регистрацию
        </Text>
      </Wrap>
    );
  }
}
