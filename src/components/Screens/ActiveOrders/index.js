import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from '../../../store/actions';
import {fetchPostOrders} from '../../../store/actions/orders';
import {fetchPatchSettingsPublicOrdersVisibility} from '../../../store/actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
    fetchPostOrders: (data) => dispatch(fetchPostOrders(data)),
    fetchPatchSettingsPublicOrdersVisibility: (data) =>
      dispatch(fetchPatchSettingsPublicOrdersVisibility(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
