import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import WrapBack from '../../../UI/Wrap/WrapBack';
import ItemHistoryDeposit from '../../../UI/Item/ItemHistoryDeposit';
import SortBy from '../../../UI/Sort/SortBy';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class HistoryDeposit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => <ItemHistoryDeposit key={index} {...item} />;

  render() {
    return (
      <Wrap noScroll titleView={<WrapBack title="Истории вводов" />}>
        <SortBy />

        <FlatList
          data={DATA}
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
