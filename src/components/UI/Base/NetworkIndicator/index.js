import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    networkIndicator: state.networkIndicator,
  };
}

export default connect(mapStateToProps)(component);
