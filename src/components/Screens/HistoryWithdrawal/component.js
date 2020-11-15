import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import ItemHistoryWithdrawal from '../../UI/Item/ItemHistoryWithdrawal';
import SortBy from '../../UI/Sort/SortBy';

// Helpers
import {_fetchError} from '../../../helpers';

// Api
import {getPurseWithdrawals} from '../../../store/api/purse';

// Style
import {base} from './styles';

export default class HistoryWithdrawal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;

    showNetworkIndicator(true);
    getPurseWithdrawals({user})
      .then((result) => this.setState({data: result.data.result}))
      .catch((e) => _fetchError(this.props, e, 'getPurseWithdrawals'))
      .finally(() => showNetworkIndicator(false));
  }

  renderItem = ({item, index}) => (
    <ItemHistoryWithdrawal key={index} {...item} />
  );

  render() {
    const {data} = this.state;
    return (
      <Wrap noScroll titleView={<WrapBack title="История выводов" />}>
        <SortBy />

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={base.wrap1}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Wrap>
    );
  }
}
