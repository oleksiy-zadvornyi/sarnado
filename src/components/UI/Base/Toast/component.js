import React from 'react';
import T, {DURATION} from 'react-native-easy-toast';

export default class Toast extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.toast.id !== prevProps.toast.id) {
      this.toast.show(this.props.toast.text, 3000);
    }
  }

  ref = (ref) => {
    this.toast = ref;
  };

  render() {
    return <T ref={this.ref} />;
  }
}
