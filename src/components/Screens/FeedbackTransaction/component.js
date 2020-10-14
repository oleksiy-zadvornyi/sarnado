import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Image from 'react-native-scalable-image';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';

// Helpers
import * as Images from '../../../helpers/images';

// Style
import {base} from './styles';

export default class FeedbackTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
    };
  }

  onChangeFeedback = (feedback) => {};

  render() {
    const {feedback} = this.state;
    return (
      <Wrap titleView={<WrapBack title="Отзыв о сделке" />}>
        <View style={base.wrap1}>
          <Text style={base.text1}>Ваш отзыв</Text>
          <TextInput
            style={base.text2}
            value={feedback}
            placeholder="asd"
            placeholderTextColor="#5A5A5A"
            multiline
            onChangeText={this.onChangeFeedback}
          />
        </View>
      </Wrap>
    );
  }
}
