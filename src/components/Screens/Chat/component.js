import React, {Profiler} from 'react';
import {View, Text} from 'react-native';
import Pusher from 'pusher-js/react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import OrderTimer from '../../UI/Order/OrderTimer';
import OrderUser from '../../UI/Order/OrderUser';
import OrderTab from '../../UI/Order/OrderTab';
import OrderDescription from '../../UI/Order/OrderDescription';
import OrderPay from '../../UI/Order/OrderPay';
import OrderChat from '../../UI/Order/OrderChat';

// Helpers
import {_fetchError} from '../../../helpers';
import {navigate} from '../../../helpers/navigation';

// Api
import {getChatGetId} from '../../../store/api/chat';
import {getDealGetOpenId} from '../../../store/api/deal';
import {URL} from '../../../store/api';

// Style
import {base} from './styles';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    const id = props.route.params?.id ?? 0;
    this.state = {
      id,
      loaded: false,
      tabIndex: 0,
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    const {id} = this.state;

    showNetworkIndicator(true);
    getChatGetId({user, id})
      .then((result) => this.setState({...result.data, loaded: true}))
      .catch((e) => _fetchError(this.props, e, 'getChatGetId'))
      .finally(() => showNetworkIndicator(false));

    const pusher = new Pusher('396d432731668479e578', {
      cluster: 'eu',
      authEndpoint: `${URL}/api/broadcasting/auth`,
      pongTimeout: 0,
      forceTLS: true,
      encrypted: true,
      auth: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });

    const channel = pusher.subscribe(`presence-deal_chat.${id}`);
    channel.bind('msg.simple.created', (data) => {
      console.log('msg.simple.created', data.message);
      this.setState({
        messages: [...this.state.messages, data.message],
      });
    });
    channel.bind('msg.credentials.created', (data) => {
      console.log('msg.credentials.created', data);
      this.setState({
        credentials: data.message,
      });
    });
    channel.bind('service_msg.deal.credentials_created', (data) => {
      console.log('service_msg.deal.credentials_created', data);
      showNetworkIndicator(true);
      getDealGetOpenId({user, id})
        .then((result) =>
          this.setState({
            deal: result.data,
            dispute: result.data.dispute,
          }),
        )
        .catch((e) => _fetchError(this.props, e, 'getDealGetOpenId'))
        .finally(() => showNetworkIndicator(false));
    });
    channel.bind('service_msg.deal.funds_sent', (data) => {
      console.log('service_msg.deal.funds_sent', data);
      showNetworkIndicator(true);
      getDealGetOpenId({user, id})
        .then((result) =>
          this.setState({
            deal: result.data,
            dispute: result.data.dispute,
          }),
        )
        .catch((e) => _fetchError(this.props, e, 'getDealGetOpenId'))
        .finally(() => showNetworkIndicator(false));
    });
    channel.bind('service_msg.deal.completed', (data) => {
      console.log('service_msg.deal.completed', data);
      navigate('FeedbackTransaction', {id});
    });
    channel.bind('service_msg.deal.expired', (data) => {
      console.log('service_msg.deal.expired', data);
      navigate('FeedbackTransaction', {id});
    });
    channel.bind('service_msg.deal.canceled', (data) => {
      console.log('service_msg.deal.canceled', data);
      navigate('FeedbackTransaction', {id});
    });
  }

  onPressTab = (tabIndex) => this.setState({tabIndex});

  render() {
    const {loaded, tabIndex} = this.state;

    if (loaded) {
      const {profile} = this.props;
      const {id, credentials, users, messages} = this.state;
      const {amount, countdown, status, type, data} = this.state.deal;
      const {name} = type === 'sell' ? users.crypto : users.fiat;

      return (
        <Wrap noScroll>
          <OrderTimer
            title="Время на подтверждение получения"
            countdown={countdown}
          />
          <OrderUser name={name} dispute={status === 'opened_dispute'} />
          <OrderTab tabIndex={tabIndex} onPressTab={this.onPressTab} />

          {tabIndex === 1 && <OrderDescription amount={amount} data={data} />}
          {tabIndex === 2 && (
            <OrderPay
              id={id}
              credentials={credentials}
              status={status}
              isCrypto={profile.id === users.crypto.id}
            />
          )}
          {tabIndex === 0 && (
            <OrderChat id={id} messages={messages} users={users} />
          )}
          <Text style={base.text1}>
            1. Вы должны пообщаться и выслать реквизиты для оплаты
          </Text>
          <Text style={base.text1}>
            2. Дождитесь уведомления об отправке средств от покупателя
          </Text>
          <Text style={base.text1}>
            3. Подтвердите получение, нажав кнопку “Средства получены”
          </Text>
          <Text style={[base.text1, base.wrap1]}>
            4. Все. Криптовалюта ушла на кошелек покупателя
          </Text>
        </Wrap>
      );
    }
    return <Wrap />;
  }
}
