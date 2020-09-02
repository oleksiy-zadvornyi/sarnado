import {connect} from 'react-redux';
import component from './component';

import {showToast} from '../../../store/actions';
import {fetchPostLogin} from '../../../store/actions/user';

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
    fetchPostLogin: (data) => dispatch(fetchPostLogin(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
