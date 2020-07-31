import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import ModalExit from '../../Modal/ModalExit';

// Helpers
import * as Images from '../../../../helpers/images';
import {replace} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class WrapExit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  onPressExit = () => {
    this.setState({isVisible: false});
    replace('ChooseTheRide');
  };
  onPressHide = () => this.setState({isVisible: false});
  onPressShow = () => this.setState({isVisible: true});

  render() {
    const {title} = this.props;
    const {isVisible} = this.state;

    return (
      <View style={base.wrap1}>
        <View style={base.wrap3}>
          <TouchableOpacity style={base.wrap2} onPress={this.onPressShow}>
            <Image source={Images.left} height={wp(3)} />
            <View style={base.wrap3}>
              <Text style={base.text1}>Выйти</Text>
            </View>
          </TouchableOpacity>
          <View style={base.flex} />
          <Text style={base.text2}>{title}</Text>
        </View>

        <ModalExit
          isVisible={isVisible}
          onPressHide={this.onPressHide}
          onPressExit={this.onPressExit}
        />
      </View>
    );
  }
}
