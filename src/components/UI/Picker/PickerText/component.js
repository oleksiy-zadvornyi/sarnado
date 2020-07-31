import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import Modal from 'react-native-modal';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class PickerText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onPressShow = () => this.setState({isVisible: true});
  onPressHide = () => this.setState({isVisible: false});
  onPressSelect = (e, i) => {
    const {onSelect} = this.props;
    this.onPressHide();
    onSelect && onSelect(e, i);
  };

  render() {
    const {style, index, placeholder, data} = this.props;
    const {isVisible} = this.state;

    return (
      <TouchableOpacity style={[base.wrap1, style]} onPress={this.onPressShow}>
        <Text style={base.text1}>{index >= 0 ? data[index] : placeholder}</Text>
        <Image source={Images.down} width={12} />
        <Modal
          style={base.center}
          isVisible={isVisible}
          onBackdropPress={this.onPressHide}
          onBackButtonPress={this.onPressHide}>
          <View style={base.wrap2}>
            {data.map((e, i) => (
              <TouchableOpacity
                key={i}
                style={i !== data.length - 1 && base.border}
                onPress={() => this.onPressSelect(e, i)}>
                <Text style={base.text2}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
}
