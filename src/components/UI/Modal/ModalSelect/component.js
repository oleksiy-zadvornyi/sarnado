import React from 'react';
import {View, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import ItemModalSelect from '../../Item/ItemModalSelect';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class ModalSelect extends React.Component {
  renderItem = ({item, index}) => {
    const {onPressSelect} = this.props;
    return (
      <ItemModalSelect
        key={index}
        onPressSelect={onPressSelect}
        index={index}
        item={this.props.item}
        {...item}
      />
    );
  };

  render() {
    const {isVisible, data, onPressHide} = this.props;
    return (
      <Modal
        style={base.center}
        isVisible={isVisible}
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}>
        <View style={base.wrap1}>
          <Image
            style={base.image1}
            source={Images.cross}
            width={wp(4)}
            onPress={onPressHide}
          />
          <FlatList
            data={data}
            extraData={this.props}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    );
  }
}
