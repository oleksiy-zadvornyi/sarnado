import React from 'react';
import {View, Text, FlatList} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import ItemBuyTerminal from '../../../UI/Item/ItemBuyTerminal';
import ButtonColor from '../../../UI/Button/ButtonColor';
import Sorts from '../../../UI/Sort/Sorts';

// Helpers
import {navigate} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class BuyTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPress = () => {
    navigate('Step1');
  };

  renderItem = ({item, index}) => <ItemBuyTerminal key={index} {...item} />;

  render() {
    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь вы можете купить криптовалюту{'\n'}или выставить свой ордер на
            продажу
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
        <ButtonColor
          style={base.button1}
          title="Выставить ордер на продажу"
          onPress={this.onPress}
        />
      </Wrap>
    );
  }
}
