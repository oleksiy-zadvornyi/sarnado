import {connect} from 'react-redux';
import component from './component';

import {fetchPostLogout} from '../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostLogout: (data) => dispatch(fetchPostLogout(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
