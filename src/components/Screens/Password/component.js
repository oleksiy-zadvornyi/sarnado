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

// Api
import {patchSettingsPassword} from '../../../store/api/user';

// Style
import {base} from './styles';
import {goBack} from '../../../helpers/navigation';

const initState = {old_password: '', password: '', password_confirmation: ''};

export default class Password extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  onChangeOldPassword = (old_password) => this.setState({old_password});
  onChangeNewPassword = (password) => this.setState({password});
  onChangeReNewPassword = (password_confirmation) =>
    this.setState({password_confirmation});

  refNewPassword = (ref) => (this.password = ref);
  refReNewPassword = (ref) => (this.password_confirmation = ref);

  nextNewPassword = () => this.password.focus();
  nextReNewPassword = () => this.password_confirmation.focus();

  done = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {old_password, password, password_confirmation} = this.state;

    if (old_password.length === 0) {
      showToast('Введите старый пароль');
      return;
    }
    if (password.length === 0) {
      showToast('Введите новый пароль');
      return;
    }
    if (password_confirmation.length === 0) {
      showToast('Введите подтверждение нового пароля');
      return;
    }
    if (password !== password_confirmation) {
      showToast('Пароли не совпадают');
      return;
    }

    const data = {
      old_password,
      password,
      password_confirmation,
    };
    showNetworkIndicator(true);
    patchSettingsPassword({data, user})
      .then(goBack)
      .catch((e) => console.log(e))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {old_password, password, password_confirmation} = this.state;

    return (
      <Wrap titleView={<WrapBack title="Смена пароля" />}>
        <Image style={base.wrap1} source={Images.change} width={wp(17.5)} />

        <Text style={base.text1}>Старый пароль</Text>
        <InputText
          style={base.input1}
          title=""
          returnKeyType="next"
          value={old_password}
          secureTextEntry
          onChangeText={this.onChangeOldPassword}
          onSubmitEditing={this.nextNewPassword}
        />

        <Text style={base.text1}>Новый пароль</Text>
        <InputText
          ref={this.refNewPassword}
          style={base.input1}
          title=""
          returnKeyType="next"
          value={password}
          secureTextEntry
          onChangeText={this.onChangeNewPassword}
          onSubmitEditing={this.nextReNewPassword}
        />

        <Text style={base.text1}>Повторите пароль</Text>
        <InputText
          ref={this.refReNewPassword}
          style={base.input1}
          title=""
          returnKeyType="done"
          value={password_confirmation}
          secureTextEntry
          onChangeText={this.onChangeReNewPassword}
          onSubmitEditing={this.done}
        />

        <ButtonColor
          styleTouchable={base.wrap1}
          style={base.wrap2}
          title="Изменить"
          onPress={this.done}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          Старайтесь использовать в пароле заглавные и строчные буквы, цифры и
          специальные символы.{'\n'}Помните, что безопасность вашего Аккаунта во
          многом зависит от вас. Мы рекомендуем вам периодически менять пароль
          для обеспечения безопасности.
        </Text>
        <View style={base.flex} />
      </Wrap>
    );
  }
}
