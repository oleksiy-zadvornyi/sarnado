import React from 'react';
import {View, TextInput} from 'react-native';

// Components
import ButtonColor from '../../Button/ButtonColor';

// Style
import {base} from './styles';

export default class InputTextButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClear: false,
    };
  }

  ref = (ref) => {
    this.input = ref;
  };

  focus = () => {
    this.input.focus();
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
      forgetPassword,
      keyboardType,
      returnKeyType,
      onChangeText,
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
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize || 'none'}
          textContentType={textContentType || 'none'}
          passwordRules={
            secureTextEntry &&
            'required: lower; required: upper; required: digit; required: [-]; minlength: 6; maxlength: 40;'
          }
          autoCorrect={false}
          underlineColorAndroid="transparent"
          clearButtonMode={forgetPassword ? 'never' : 'always'}
          keyboardType={keyboardType ? keyboardType : 'default'}
          returnKeyType={returnKeyType ? returnKeyType : 'done'}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <ButtonColor
          styleText={base.text1}
          style={base.wrap2}
          title="Изменить"
        />
      </View>
    );
  }
}
