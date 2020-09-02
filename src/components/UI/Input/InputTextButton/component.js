import React from 'react';
import {View, TextInput} from 'react-native';

// Components
import ButtonColor from '../../Button/ButtonColor';
import ModalEditPhone from '../../Modal/ModalEditPhone';
import ModalEditPassword from '../../Modal/ModalEditPassword';
import ModalEditCountry from '../../Modal/ModalEditCountry';
import ModalEditFiat from '../../Modal/ModalEditFiat';
import ModalEditLocalBitcoins from '../../Modal/ModalEditLocalBitcoins';

// Style
import {base} from './styles';

export default class InputTextButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClear: false,
      isVisible: false,
    };
  }

  ref = (ref) => {
    this.input = ref;
  };

  focus = () => {
    this.input.focus();
  };

  onPress = () => this.setState({isVisible: true});
  onPressHide = () => this.setState({isVisible: false});

  renderModal = () => {
    const {type} = this.props;
    const {isVisible} = this.state;
    const props = {
      isVisible,
      onPressHide: this.onPressHide,
      ...this.props,
    };

    switch (type) {
      case 'phone': {
        return <ModalEditPhone {...props} />;
      }
      case 'password': {
        return <ModalEditPassword {...props} />;
      }
      case 'country': {
        return <ModalEditCountry {...props} />;
      }
      case 'fiat': {
        return <ModalEditFiat {...props} />;
      }
      case 'localBitcoins': {
        return <ModalEditLocalBitcoins {...props} />;
      }
    }
  };

  render() {
    const {
      style,
      inputStyle,
      title,
      value,
      multiline,
      textContentType,
      autoCapitalize,
      secureTextEntry,
      keyboardType,
      returnKeyType,
      onSubmitEditing,
    } = this.props;

    return (
      <View style={[base.wrap1, style]}>
        <TextInput
          ref={this.ref}
          style={[base.input, inputStyle]}
          value={value}
          multiline={multiline}
          placeholder={title}
          placeholderTextColor="#898989"
          editable={false}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize || 'none'}
          textContentType={textContentType || 'none'}
          passwordRules={
            secureTextEntry &&
            'required: lower; required: upper; required: digit; required: [-]; minlength: 6; maxlength: 40;'
          }
          autoCorrect={false}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType ? keyboardType : 'default'}
          returnKeyType={returnKeyType ? returnKeyType : 'done'}
          onSubmitEditing={onSubmitEditing}
        />
        <ButtonColor
          styleText={base.text1}
          style={base.wrap2}
          title="Изменить"
          onPress={this.onPress}
        />
        {this.renderModal()}
      </View>
    );
  }
}
