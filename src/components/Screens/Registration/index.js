import {connect} from 'react-redux';
import component from './component';

import {showToast, showNetworkIndicator} from '../../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
