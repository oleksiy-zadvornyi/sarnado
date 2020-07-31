import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  onChangeEmail = (login) => this.setState({login});
  onChangePassword = (password) => this.setState({password});

  refPassword = (ref) => (this.password = ref);
  nextPassword = () => this.password.focus();

  done = () => {};

  render() {
    const {login, password} = this.state;
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
          returnKeyType="done"
          onChangeText={this.onChangePassword}
          onSubmitEditing={this.done}
        />
        <ButtonColor style={base.button1} title="Войти" />
        <View style={base.flex} />
        <View style={base.flex} />
        <TouchableOpacity>
          <Text style={base.text2}>Забыли пароль?</Text>
        </TouchableOpacity>
        <View style={base.flex} />
        <View style={base.flex} />
        <View style={base.flex} />
        <Text style={base.text3}>
          Если у вас еще нет аккаунта,{'\n'}то пройдите простую регистрацию
        </Text>

        <ButtonColor
          style={base.button2}
          title="Зарегистрироваться"
          onPress={() => navigate('Registration')}
        />
      </Wrap>
    );
  }
}
