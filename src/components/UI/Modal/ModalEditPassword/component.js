import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

// Components
import InputText from '../../Input/InputText';
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';

const initState = {
  old_password: '',
  password: '',
  password_confirmation: '',
};

export default class ModalEditPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  onChangeOldPassword = (old_password) => this.setState({old_password});
  onChangePassword = (password) => this.setState({password});
  onChangePasswordConfirmation = (password_confirmation) =>
    this.setState({password_confirmation});

  refPassword = (ref) => (this.password = ref);
  refPasswordConfirmation = (ref) => (this.password_confirmation = ref);

  nextPassword = () => this.password.focus();
  nextPasswordConfirmation = () => this.password_confirmation.focus();

  done = () => {
    const {
      user,
      onPressHide,
      showToast,
      fetchPatchSettingsPassword,
    } = this.props;
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
    fetchPatchSettingsPassword({data, user});
    onPressHide();
    this.setState(initState);
  };

  render() {
    const {isVisible, onPressHide} = this.props;
    const {old_password, password, password_confirmation} = this.state;
    return (
      <Modal
        style={base.center}
        isVisible={isVisible}
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}>
        <View style={base.wrap1}>
          <InputText
            style={base.input1}
            title="Старый пароль"
            returnKeyType="next"
            value={old_password}
            secureTextEntry
            onChangeText={this.onChangeOldPassword}
            onSubmitEditing={this.nextPassword}
          />
          <InputText
            ref={this.refPassword}
            style={base.input1}
            title="Новый пароль"
            returnKeyType="next"
            value={password}
            secureTextEntry
            onChangeText={this.onChangePassword}
            onSubmitEditing={this.nextPasswordConfirmation}
          />
          <InputText
            ref={this.refPasswordConfirmation}
            style={base.input1}
            title="Подтверждение нового пароля"
            returnKeyType="done"
            value={password_confirmation}
            secureTextEntry
            onChangeText={this.onChangePasswordConfirmation}
            onSubmitEditing={this.done}
          />
          <ButtonColor
            style={base.button1}
            title="Изменить"
            onPress={this.done}
          />
        </View>
      </Modal>
    );
  }
}
