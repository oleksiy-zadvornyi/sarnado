import React from 'react';

// Screens
import Tab from './Tab';
import Auth from './Auth';

export default class Route extends React.Component {
  render() {
    const {user} = this.props;
    if (user.token) {
      return <Tab />;
    }
    return <Auth />;
  }
}
