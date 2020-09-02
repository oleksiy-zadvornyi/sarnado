import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from '../../../../../store/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
