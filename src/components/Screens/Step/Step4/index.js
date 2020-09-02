import React from 'react';

// Components
import Buy from './Buy';
import Sell from './Sell';

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);

    const prevProps = props.route.params?.prevProps ?? {};
    this.state = {
      prevProps,
    };
  }

  render() {
    const {prevProps} = this.state;

    if (prevProps.orderType === 'sell') {
      return <Sell prevProps={prevProps} />;
    }
    return <Buy prevProps={prevProps} />;
  }
}
