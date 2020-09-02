import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from '../../../../store/actions';
import {
  fetchPatchSettingsGeoUpdate,
  reducePostLogout,
} from '../../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
    reducePostLogout: () => dispatch(reducePostLogout()),
    fetchPatchSettingsGeoUpdate: (data) =>
      dispatch(fetchPatchSettingsGeoUpdate(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
