import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import ItemWallet from '../../UI/Item/ItemWallet';

// Style
import {base} from './styles';

// import {DATA} from './staticData';

export default class Wallets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => <ItemWallet key={index} {...item} />;

  render() {
    const {purse} = this.props;
    return (
      <Wrap noScroll>
        <WrapBack title="Мои кошельки" />

        <FlatList
          data={purse}
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
