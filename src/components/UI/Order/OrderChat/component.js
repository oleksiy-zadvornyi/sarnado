import React from 'react';
import {View, FlatList} from 'react-native';

//Components
import ButtonColor from '../../Button/ButtonColor';
import OrderChatInput from '../OrderChatInput';
import OrderChatItem from '../OrderChatItem';

// Helpers
import {_fetchError} from '../../../../helpers';

// Api
import {postChatStoreSimple} from '../../../../store/api/chat';

// Style
import {base} from './styles';

export default class OrderChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  onChangeMessage = (message) => this.setState({message});

  renderItem = ({item, index}) => (
    <OrderChatItem key={index} {...item} users={this.props.users} />
  );

  send = () => {
    const {id, user, showNetworkIndicator} = this.props;
    const {message} = this.state;
    const data = {
      id,
      msg: message,
    };
    showNetworkIndicator(true);
    postChatStoreSimple({user, data})
      .then(() =>
        this.setState({
          message: '',
        }),
      )
      .catch((e) => _fetchError(this.props, e, 'postChatStoreSimple'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {message} = this.state;
    const {messages} = this.props;
    return (
      <View style={base.flex}>
        <View style={base.wrap1}>
          <FlatList
            data={messages}
            extraData={this.props}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <OrderChatInput
          title="Текст сообщения"
          returnKeyType="done"
          value={message}
          multiline
          onChangeText={this.onChangeMessage}
        />
        <ButtonColor
          style={base.wrap2}
          title="Отправить сообщение"
          onPress={this.send}
        />
      </View>
    );
  }
}
