import React from 'react';
import {View, TextInput} from 'react-native';

// Style
import {base} from './styles';

export default class OrderChatInput extends React.Component {
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
      editable,
      textContentType,
      autoCapitalize,
      secureTextEntry,
      keyboardType,
      returnKeyType,
      onChangeText,
      onSubmitEditing,
    } = this.props;

    return (
      <View style={[base.wrap, style]}>
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
          editable={editable}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType ? keyboardType : 'default'}
          returnKeyType={returnKeyType ? returnKeyType : 'done'}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    );
  }
}
