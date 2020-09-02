import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

// Components
import InputText from '../../Input/InputText';
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';

export default class ModalEditLocalBitcoins extends React.Component {
  constructor(props) {
    super(props);

    const {value} = props;
    this.state = {
      local_btc_account: value || '',
    };
  }
  onChangeLocalBitcoins = (local_btc_account) =>
    this.setState({local_btc_account});

  done = () => {
    const {user, onPressHide, fetchPatchSettingsLocalBtcAccount} = this.props;
    const {local_btc_account} = this.state;
    const data = {
      local_btc_account,
    };
    fetchPatchSettingsLocalBtcAccount({data, user});
    onPressHide();
  };

  render() {
    const {isVisible, title, onPressHide} = this.props;
    const {local_btc_account} = this.state;
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
            value={local_btc_account}
            onChangeText={this.onChangeLocalBitcoins}
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
