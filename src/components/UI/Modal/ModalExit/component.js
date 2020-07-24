import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";
import Modal from "react-native-modal";

// Helpers
import * as Images from "../../../../helpers/images";

// Style
import { base } from "./styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default class ModalExit extends React.Component {
  render() {
    const { onPressHide } = this.props;
    return (
      <Modal
        style={base.center}
        isVisible
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}
      >
        <View style={base.wrap1}>
          <Image source={Images.exclamation} width={wp(10)} />
          <Text style={base.text1}>
            Вы действительно хотите прекратить{"\n"}создание ордера?
          </Text>
          <View style={base.wrap2}>
            <TouchableOpacity style={base.wrap3}>
              <Text style={base.text2}>Нет, остаемся</Text>
            </TouchableOpacity>
            <TouchableOpacity style={base.wrap4}>
              <Text style={base.text2}>Нет, остаемся</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
