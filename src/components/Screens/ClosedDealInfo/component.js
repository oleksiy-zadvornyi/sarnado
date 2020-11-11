import React from 'react';

// Components
import Wrap from '../../UI/Base/Wrap';
import OrderDescription from '../../UI/Order/OrderDescription';

// Helpers
import {_fetchError} from '../../../helpers';

//Api
import {getDealsGetCompleted} from '../../../store/api/deal';

export default class ClosedDealInfo extends React.Component {
  constructor(props) {
    super(props);

    const id = props.route.params?.id ?? 0;
    this.state = {
      id,
      deal: null,
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    const {id} = this.state;

    const path = {
      id,
    };
    showNetworkIndicator(true);
    getDealsGetCompleted({path, user})
      .then((result) => this.setState({deal: result.data.deal}))
      .catch((e) => _fetchError(this.props, e, 'getDealsGetCompleted'))
      .finally(() => showNetworkIndicator(false));
  }

  render() {
    return (
      <Wrap>
        {this.state.deal && (
          <OrderDescription
            amount={this.state.deal.amount}
            data={this.state.deal.data}
          />
        )}
      </Wrap>
    );
  }
}
