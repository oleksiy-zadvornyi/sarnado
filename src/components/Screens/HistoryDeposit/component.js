import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import ItemHistoryDeposit from '../../UI/Item/ItemHistoryDeposit';
import SortBy from '../../UI/Sort/SortBy';

// Helpers
import {_fetchError} from '../../../helpers';

// Api
import {getPurseDeposits} from '../../../store/api/purse';

// Style
import {base} from './styles';

export default class HistoryDeposit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;

    showNetworkIndicator(true);
    getPurseDeposits({user})
      .then((result) => this.setState({data: result.data.result}))
      .catch((e) => _fetchError(this.props, e, 'getPurseDeposits'))
      .finally(() => showNetworkIndicator(false));
  }

  renderItem = ({item, index}) => <ItemHistoryDeposit key={index} {...item} />;

  render() {
    const {data} = this.state;

    return (
      <Wrap noScroll titleView={<WrapBack title="Истории вводов" />}>
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
