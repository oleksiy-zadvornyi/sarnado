import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import ModalSelect from '../../Modal/ModalSelect';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  onPress = () => this.setState({isVisible: true});
  onPressHide = () => this.setState({isVisible: false});
  onPressSelect = (index) => {
    const {onChange} = this.props;
    onChange(index);
    this.setState({isVisible: false});
  };

  render() {
    const {style, inputStyle, title, data, index, item, disabled} = this.props;
    const {isVisible} = this.state;
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[base.wrap1, style]}
        onPress={this.onPress}>
        <View style={base.wrap2}>
          <View style={base.flex} />
          <Text style={[base.input, index === -1 && base.text1, inputStyle]}>
            {index >= 0 ? data[index][item] : title}
          </Text>
          <View style={base.flex} />
        </View>
        <Image style={base.image1} source={Images.down} width={wp(4)} />
        <ModalSelect
          isVisible={isVisible}
          data={data}
          item={item}
          onPressHide={this.onPressHide}
          onPressSelect={this.onPressSelect}
        />
      </TouchableOpacity>
    );
  }
}
