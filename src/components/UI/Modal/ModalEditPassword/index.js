import {connect} from 'react-redux';
import component from './component';

import {showToast} from '../../../../store/actions';
import {fetchPatchSettingsPassword} from '../../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
    fetchPatchSettingsPassword: (data) =>
      dispatch(fetchPatchSettingsPassword(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
