import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import Modal from 'react-native-modal';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class ModalAlert extends React.Component {
  render() {
    const {
      isVisible,
      textBody,
      textYes,
      textNo,
      onPressHide,
      onPressYes,
    } = this.props;
    return (
      <Modal
        style={base.center}
        isVisible={isVisible}
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}>
        <View style={base.wrap1}>
          <Image source={Images.exclamation} width={wp(10)} />
          <Text style={base.text1}>{textBody}</Text>
          <View style={base.wrap2}>
            <TouchableOpacity style={base.wrap3} onPress={onPressHide}>
              <Text style={base.text2}>{textNo}</Text>
            </TouchableOpacity>
            <View style={base.flex} />
            <TouchableOpacity style={base.wrap4} onPress={onPressYes}>
              <Text style={base.text2}>{textYes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
