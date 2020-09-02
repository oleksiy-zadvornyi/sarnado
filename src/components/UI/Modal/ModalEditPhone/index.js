import {connect} from 'react-redux';
import component from './component';

import {fetchPostSettingsPhoneStore} from '../../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostSettingsPhoneStore: (data) =>
      dispatch(fetchPostSettingsPhoneStore(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
