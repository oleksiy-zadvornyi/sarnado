import React from 'react';
import {View} from 'react-native';

// Components
import ButtonColor from '../../Button/ButtonColor';
import OrderChatInput from '../OrderChatInput';

// Helpers
import {_fetchError} from '../../../../helpers';

// Api
import {
  postChatStoreCredentials,
  patchDealFundsSentId,
  patchDealApproveId,
} from '../../../../store/api/chat';

// Style
import {base} from './styles';

export default class OrderPay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  onPressSendCredentials = () => {
    const {id, user, showNetworkIndicator} = this.props;
    const {message} = this.state;
    const data = {
      id,
      msg: message,
    };
    showNetworkIndicator(true);
    postChatStoreCredentials({user, data})
      .catch((e) => _fetchError(this.props, e, 'postChatStoreCredentials'))
      .finally(() => showNetworkIndicator(false));
  };

  onPressSendDealFunds = () => {
    const {id, user, showNetworkIndicator} = this.props;
    const path = {
      id,
    };
    showNetworkIndicator(true);
    patchDealFundsSentId({user, path})
      .catch((e) => _fetchError(this.props, e, 'patchDealFundsSentId'))
      .finally(() => showNetworkIndicator(false));
  };

  onPressSendDealApprove = () => {
    const {id, user, showNetworkIndicator} = this.props;
    const path = {
      id,
    };
    showNetworkIndicator(true);
    patchDealApproveId({user, path})
      .catch((e) => _fetchError(this.props, e, 'patchDealApproveId'))
      .finally(() => showNetworkIndicator(false));
  };

  onChangeMessage = (message) => this.setState({message});

  renderButton = () => {
    const {isCrypto, status} = this.props;
    if (isCrypto) {
      switch (status) {
        case 'opened': {
          return (
            <ButtonColor
              style={base.wrap3}
              title="Отправить платежные данные"
              onPress={this.onPressSendCredentials}
            />
          );
        }
        case 'funds_sent': {
          return (
            <>
              <ButtonColor
                style={base.wrap3}
                title="Я получил деньги"
                onPress={this.onPressSendDealApprove}
              />
              <ButtonColor
                style={base.wrap6}
                title="Открыть диспут"
                // onPress={this.onPressSendCredentials}
              />
            </>
          );
        }
      }
    } else {
      switch (status) {
        case 'credentials_received': {
          return (
            <ButtonColor
              style={base.wrap3}
              title="Я оплатил"
              onPress={this.onPressSendDealFunds}
            />
          );
        }
      }
    }
  };

  render() {
    const {isCrypto, credentials} = this.props;
    const {message} = this.state;
    return (
      <View style={base.flex}>
        <OrderChatInput
          editable={!credentials.msg && isCrypto}
          style={base.wrap2}
          title={`Покупатель оплатил сумму покупки!${'\n'}Как только средства поступят на ваш счет, подтвердите получение средств!`}
          returnKeyType="done"
          value={credentials.msg || message}
          multiline
          onChangeText={this.onChangeMessage}
        />
        {this.renderButton()}
      </View>
    );
  }
}
