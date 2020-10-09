import {connect} from 'react-redux';
import component from './component';

import {showToast} from '../../../store/actions';

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
