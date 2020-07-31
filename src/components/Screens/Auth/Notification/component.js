import React from 'react';
import {FlatList} from 'react-native';

// Components
import Wrap from '../../../UI/Base/Wrap';
import WrapBack from '../../../UI/Wrap/WrapBack';
import ItemNotification from '../../../UI/Item/ItemNotification';
import ButtonColor from '../../../UI/Button/ButtonColor';

// Style
import {base} from './styles';

import {DATA} from './staticData';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => <ItemNotification key={index} {...item} />;

  render() {
    return (
      <Wrap noScroll titleView={<WrapBack title="Оповещения" />}>
        <ButtonColor
          styleTouchable={base.margin1}
          style={base.button1}
          title="Отметить все как прочитанное"
        />

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
