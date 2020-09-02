import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

// Components
import InputText from '../../Input/InputText';
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';

export default class ModalEditPhone extends React.Component {
  constructor(props) {
    super(props);

    const {value} = props;
    this.state = {
      phone: value || '',
    };
  }
  onChangePhone = (phone) => this.setState({phone});

  done = () => {
    const {user, onPressHide, fetchPostSettingsPhoneStore} = this.props;
    const {phone} = this.state;
    const data = {
      phone,
    };
    fetchPostSettingsPhoneStore({data, user});
    onPressHide();
  };

  render() {
    const {isVisible, title, keyboardType, onPressHide} = this.props;
    const {phone} = this.state;
    return (
      <Modal
        style={base.center}
        isVisible={isVisible}
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}>
        <View style={base.wrap1}>
          <InputText
            style={base.input1}
            title={title}
            returnKeyType="done"
            value={phone}
            keyboardType={keyboardType}
            onChangeText={this.onChangePhone}
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
