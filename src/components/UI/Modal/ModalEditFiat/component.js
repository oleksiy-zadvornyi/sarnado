import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

// Components
import InputSelect from '../../Input/InputSelect';
import ButtonColor from '../../Button/ButtonColor';

// Api
import {getCurrencyGetFiat} from '../../../../store/api/service';

// Style
import {base} from './styles';

const initState = {
  indexFiat: -1,
  fiat: [],
};

export default class ModalEditCountry extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  componentDidMount() {
    this.fetchFiat();
  }

  onChangeFiat = (indexFiat) => this.setState({indexFiat});

  fetchFiat = () => {
    const {user, showNetworkIndicator} = this.props;
    showNetworkIndicator(true);
    getCurrencyGetFiat({user})
      .then((result) => {
        this.setState({fiat: result.data});
      })
      .catch((e) => console.log(e))
      .finally(() => showNetworkIndicator(false));
  };

  done = () => {
    const {user, fetchPatchSettingsFiat, onPressHide, showToast} = this.props;
    const {indexFiat, fiat} = this.state;

    if (indexFiat === -1) {
      showToast('Выберите валюту');
      return;
    }

    const data = {
      id: fiat[indexFiat].id,
      code: fiat[indexFiat].code,
    };
    fetchPatchSettingsFiat({data, user});
    onPressHide();
    this.setState(initState);
  };

  render() {
    const {isVisible, title, onPressHide} = this.props;
    const {indexFiat, fiat} = this.state;
    return (
      <Modal
        style={base.center}
        isVisible={isVisible}
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}>
        <View style={base.wrap1}>
          <InputSelect
            style={base.input1}
            title={title}
            data={fiat}
            index={indexFiat}
            item="code"
            onChange={this.onChangeFiat}
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
