import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    toast: state.toast,
  };
}

export default connect(mapStateToProps, null)(component);
