import {connect} from 'react-redux';
import component from './component';

import {fetchPatchSettingsLocalBtcAccount} from '../../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPatchSettingsLocalBtcAccount: (data) =>
      dispatch(fetchPatchSettingsLocalBtcAccount(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
