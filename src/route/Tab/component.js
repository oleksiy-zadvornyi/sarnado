import React from 'react';
import Navigation from './Navigation';

export default class Tab extends React.Component {
  componentDidMount() {
    const {user, fetchGetPurseGetAll} = this.props;
    fetchGetPurseGetAll({user});
  }

  render() {
    return <Navigation />;
  }
}
