import React from 'react';
import {View, Text} from 'react-native';

// Style
import {base} from './styles';

export default class WrapCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {title} = this.props;

    return (
      <View style={base.wrap1}>
        <View style={base.flex} />
        <Text style={base.text1}>{title}</Text>
        <View style={base.flex} />
      </View>
    );
  }
}
