import {connect} from 'react-redux';
import component from './component';

import {fetchGetPurseGetAll} from '../../store/actions/purse';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGetPurseGetAll: (data) => dispatch(fetchGetPurseGetAll(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
