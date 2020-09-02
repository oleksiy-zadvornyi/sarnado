import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from '../../../../store/actions';
import {fetchPatchSettingsFiat} from '../../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
    fetchPatchSettingsFiat: (data) => dispatch(fetchPatchSettingsFiat(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
