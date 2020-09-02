import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    purse: state.purse,
  };
}

export default connect(mapStateToProps, null)(component);
