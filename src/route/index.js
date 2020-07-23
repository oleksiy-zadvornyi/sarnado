import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, null)(component);
