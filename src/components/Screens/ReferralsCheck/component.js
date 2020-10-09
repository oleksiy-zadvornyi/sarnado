import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import ItemReferralCheck from '../../UI/Item/ItemReferralCheck';
import SortBy from '../../UI/Sort/SortBy';

// Helpers
import {_fetchError} from '../../../helpers/index';

// Api
import {getSettingsReferralsGet} from '../../../store/api/user';

// Style
import {base} from './styles';

export default class ReferralsCheck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referrals: [],
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    showNetworkIndicator(true);
    getSettingsReferralsGet({user})
      .then((result) => this.setState({referrals: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getSettingsReferralsGet'))
      .finally(() => showNetworkIndicator(false));
  }

  renderItem = ({item, index}) => <ItemReferralCheck key={index} {...item} />;

  render() {
    const {referrals} = this.state;
    return (
      <Wrap noScroll titleView={<WrapBack title="Мои рефералы" />}>
        <SortBy />

        <FlatList
          data={referrals}
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
