import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import ItemSellTerminal from '../../../UI/Item/ItemSellTerminal';
import ButtonColor from '../../../UI/Button/ButtonColor';
import Sorts from '../../../UI/Sort/Sorts';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class SellTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => <ItemSellTerminal key={index} {...item} />;

  render() {
    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь вы можете продать криптовалюту{'\n'}
            или выставить свой ордер на покупку
          </Text>
        </View>
        <Sorts />

        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <ButtonColor style={base.button1} title="Выставить ордер на покупку" />
      </Wrap>
    );
  }
}
