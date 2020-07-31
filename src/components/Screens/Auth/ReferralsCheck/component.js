import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import WrapBack from '../../../UI/Wrap/WrapBack';
import ItemReferralCheck from '../../../UI/Item/ItemReferralCheck';
import SortBy from '../../../UI/Sort/SortBy';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class ReferralsCheck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => <ItemReferralCheck key={index} {...item} />;

  render() {
    return (
      <Wrap noScroll titleView={<WrapBack title="Мои рефералы" />}>
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
