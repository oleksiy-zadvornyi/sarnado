import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, null)(component);
