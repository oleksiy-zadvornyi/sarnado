import {connect} from 'react-redux';
import component from './component';

import {showToast, showNetworkIndicator} from '../../../store/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
