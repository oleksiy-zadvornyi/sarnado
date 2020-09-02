import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from '../../../store/actions';
import {fetchPostOrders} from '../../../store/actions/orders';

function mapStateToProps(state) {
  return {
    user: state.user,
    orders: state.orders.buy,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNetworkIndicator: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
    fetchPostOrders: (data) => dispatch(fetchPostOrders(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
