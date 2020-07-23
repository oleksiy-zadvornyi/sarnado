import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

// Style
import styles from './styles';

export default class NetworkIndicator extends React.Component {
  render() {
    const {value} = this.props.networkIndicator;
    return (
      <Modal isVisible={value} backdropOpacity={0.3}>
        <View style={styles.flex}>
          <View style={styles.flex} />
          <ActivityIndicator size="small" />
          <View style={styles.flex} />
        </View>
      </Modal>
    );
  }
}
