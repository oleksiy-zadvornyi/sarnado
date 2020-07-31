import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Helpers
import {goBack} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class WrapStepButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {disabledBack, disabledNext, onPressBack, onPressNext} = this.props;

    return (
      <View style={base.wrap1}>
        <TouchableOpacity
          disabled={disabledBack}
          style={[base.wrap2, disabledBack && base.wrap3]}
          onPress={onPressBack ? onPressBack : goBack}>
          <Text style={[base.text1, disabledBack && base.text2]}>
            Предыдущий
          </Text>
        </TouchableOpacity>
        <View style={base.wrap4} />
        <TouchableOpacity
          disabled={disabledNext}
          style={[base.wrap5, disabledNext && base.wrap6]}
          onPress={onPressNext}>
          <Text style={[base.text1, disabledNext && base.text2]}>Далее</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
