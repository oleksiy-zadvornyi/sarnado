import {connect} from 'react-redux';
import component from './component';

import {fetchPostLogout} from '../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostLogout: (data, email) => dispatch(fetchPostLogout(data, email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
