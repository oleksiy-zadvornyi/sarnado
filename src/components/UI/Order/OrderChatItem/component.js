import React from 'react';
import {View, Text, Image} from 'react-native';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class OrderChatItem extends React.Component {
  render() {
    const {msg, user_id, type, users} = this.props;
    const user = user_id === users.crypto.id ? users.crypto : users.fiat;
    const {id} = this.props.profile;
    if (type === 'credentials_created') {
      return (
        <View style={base.wrap4}>
          <Text style={base.text2}>{type}</Text>
        </View>
      );
    }

    if (user_id === id) {
      return (
        <View style={base.wrap2}>
          <View style={base.wrap3}>
            <Text style={base.text1}>{user.name}</Text>
            <Text style={base.text2}>{msg}</Text>
          </View>
          <Image
            style={base.image1}
            source={user.photo_url ? {uri: user.photo_url} : Images.icon}
          />
        </View>
      );
    }

    return (
      <View style={base.wrap1}>
        <Image
          style={base.image1}
          source={user.photo_url ? {uri: user.photo_url} : Images.icon}
        />
        <View style={base.flex}>
          <Text style={base.text1}>{user.name}</Text>
          <Text style={base.text2}>{msg}</Text>
        </View>
      </View>
    );
  }
}
