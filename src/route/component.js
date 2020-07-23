import React from 'react';

// Screens
import Auth from './directions/Auth';
import Home from './directions/Home';

export default class Route extends React.Component {
  render() {
    const {user} = this.props;

    if (user.accessToken.length > 0) {
      return <Home />;
    }
    return <Auth />;
  }
}
