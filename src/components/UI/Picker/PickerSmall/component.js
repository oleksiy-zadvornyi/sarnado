import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import Modal from 'react-native-modal';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class PickerSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isScroll: false,
    };
  }

  onPressShow = () => this.setState({isVisible: true});
  onPressHide = () => this.setState({isVisible: false});
  onPressSelect = (e, i) => {
    const {onSelect} = this.props;
    this.onPressHide();
    onSelect && onSelect(e, i);
  };

  onLayout = (event) => {
    const {height} = event.nativeEvent.layout;
    this.setState({
      isScroll: height === hp(80),
    });
  };

  render() {
    const {title, data, style} = this.props;
    const {isVisible, isScroll} = this.state;
    return (
      <TouchableOpacity style={[base.wrap1, style]} onPress={this.onPressShow}>
        <Text style={base.text1}>{title}</Text>
        <Image source={Images.down} width={12} />
        <Modal
          style={base.center}
          isVisible={isVisible}
          onBackdropPress={this.onPressHide}
          onBackButtonPress={this.onPressHide}>
          <View style={base.wrap2} onLayout={this.onLayout}>
            {isScroll ? (
              <ScrollView>
                {data.map((e, i) => (
                  <TouchableOpacity
                    key={i}
                    style={i !== data.length - 1 && base.border}
                    onPress={() => this.onPressSelect(e, i)}>
                    <Text style={base.text2}>{e}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              <View>
                {data.map((e, i) => (
                  <TouchableOpacity
                    key={i}
                    style={i !== data.length - 1 && base.border}
                    onPress={() => this.onPressSelect(e, i)}>
                    <Text style={base.text2}>{e}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
}
