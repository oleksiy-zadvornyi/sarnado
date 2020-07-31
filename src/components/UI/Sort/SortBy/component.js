import React from 'react';
import {View} from 'react-native';

// Components
import PickerText from '../../Picker/PickerText';

// Style
import {base} from './styles';

const SORT = ['Text1', 'Text2', 'Text3'];

export default class SortBy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picker1: -1,
    };
  }

  onSelect1 = (e, i) => this.setState({picker1: i});

  render() {
    const {picker1} = this.state;
    return (
      <View style={base.wrap1}>
        <View style={base.flex} />
        <PickerText
          data={SORT}
          index={picker1}
          placeholder="Сортировать по"
          onSelect={this.onSelect1}
        />
      </View>
    );
  }
}
