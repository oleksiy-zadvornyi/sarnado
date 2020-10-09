import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './styles';

export default class OrderTimer extends React.Component {
  constructor(props) {
    super(props);

    const {countdown} = props;
    this.state = {
      countdown,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.countdown === 0) {
        clearInterval(this.timer);
      } else {
        this.setState({countdown: this.state.countdown - 1});
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getTime = () => {
    let {countdown} = this.state;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    if (countdown >= 60) {
      seconds = countdown % 60;
      countdown = Math.ceil(countdown / 60);
    } else {
      seconds = countdown;
      countdown = 0;
    }
    if (countdown >= 60) {
      minutes = countdown % 60;
      countdown = Math.ceil(countdown / 60);
    } else {
      minutes = countdown;
      countdown = 0;
    }
    if (countdown >= 60) {
      hours = countdown % 60;
      countdown = Math.ceil(countdown / 60);
    } else {
      hours = countdown;
      countdown = 0;
    }

    return `${hours > 9 ? hours : '0' + hours}:${
      minutes > 9 ? minutes : '0' + minutes
    }:${seconds > 9 ? seconds : '0' + seconds}`;
  };

  render() {
    const {title} = this.props;
    return (
      <View style={base.wrap1}>
        <Image source={Images.x} width={9} />
        <View style={base.wrap2}>
          <Text style={base.text1}>{title}</Text>
          <Text style={base.text2}>{this.getTime()}</Text>
        </View>
        <Text style={base.text3}>Активная сделка</Text>
      </View>
    );
  }
}
