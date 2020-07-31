import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../../UI/Base/Wrap';
import WrapBack from '../../../UI/Wrap/WrapBack';
import InputText from '../../../UI/Input/InputText';
import ButtonColor from '../../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class Password extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
    };
  }

  onChangeOldPassword = (oldPassword) => this.setState({oldPassword});
  onChangeNewPassword = (newPassword) => this.setState({newPassword});
  onChangeReNewPassword = (reNewPassword) => this.setState({reNewPassword});

  refNewPassword = (ref) => (this.newPassword = ref);
  refReNewPassword = (ref) => (this.reNewPassword = ref);

  nextNewPassword = () => this.newPassword.focus();
  nextReNewPassword = () => this.reNewPassword.focus();

  done = () => {};

  render() {
    const {oldPassword, newPassword, reNewPassword} = this.state;

    return (
      <Wrap titleView={<WrapBack title="Смена пароля" />}>
        <Image style={base.wrap1} source={Images.change} width={wp(17.5)} />

        <Text style={base.text1}>Старый пароль</Text>
        <InputText
          style={base.input1}
          title=""
          returnKeyType="next"
          value={oldPassword}
          secureTextEntry
          onChangeText={this.onChangeOldPassword}
          onSubmitEditing={this.nextNewPassword}
        />

        <Text style={base.text1}>Email</Text>
        <InputText
          ref={this.refNewPassword}
          style={base.input1}
          title=""
          returnKeyType="next"
          value={newPassword}
          secureTextEntry
          onChangeText={this.onChangeNewPassword}
          onSubmitEditing={this.nextPhone}
        />

        <Text style={base.text1}>Повторите пароль</Text>
        <InputText
          ref={this.refReNewPassword}
          style={base.input1}
          title=""
          returnKeyType="done"
          value={reNewPassword}
          secureTextEntry
          onChangeText={this.onChangeReNewPassword}
          onSubmitEditing={this.done}
        />

        <ButtonColor
          styleTouchable={base.wrap1}
          style={base.wrap2}
          title="Изменить"
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
