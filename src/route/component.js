import React from 'react';
import * as Permissions from 'expo-permissions';

// Screens
import Tab from './Tab';
import Auth from './Auth';

export default class Route extends React.Component {
  async componentDidMount() {
    const {status: existingStatus} = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }

  render() {
    const {user} = this.props;
    if (user.token) {
      return <Tab />;
    }
    return <Auth />;
  }
}
