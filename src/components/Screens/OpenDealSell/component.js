import React from 'react';
import {View, Text, TextInput} from 'react-native';

// Components
import Wrap from '../../UI/Base/Wrap';
import ButtonColor from '../../UI/Button/ButtonColor';
import WrapBack from '../../UI/Wrap/WrapBack';
import WrapWarningSell from '../../UI/Wrap/WrapWarningSell';
import WrapCourse from '../../UI/Wrap/WrapCourse';
import InputButtonsText from '../../UI/Input/InputButtonsText';

// Helpers
import {_fetchError} from '../../../helpers';
import {replace} from '../../../helpers/navigation';

// Api
import {postDealStore} from '../../../store/api/deal';
import {getOrderFindId} from '../../../store/api/orders';

// Style
import {base} from './styles';

export default class OpenDealSell extends React.Component {
  constructor(props) {
    super(props);

    const prevProps = props.route.params?.prevProps ?? {};
    this.state = {
      prevProps,
      order: null,
      upload: '',
      download: '',
      message: '',
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    const {id} = this.state.prevProps;
    showNetworkIndicator(true);
    getOrderFindId({user, id})
      .then((result) => this.setState({order: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getOrderFindId'))
      .finally(() => showNetworkIndicator(false));
  }

  onChangeUpload = (upload) => {
    const {exchange_rate} = this.state.order;
    const download = parseFloat(upload) * parseFloat(exchange_rate.price);
    this.setState({
      download: !isNaN(download) ? download.toFixed(2) : '',
      upload: upload.replace(',', '.'),
    });
  };

  onChangeDownload = (download) => {
    const {exchange_rate} = this.state.order;
    const upload = parseFloat(download) / parseFloat(exchange_rate.price);
    this.setState({
      upload: !isNaN(upload) ? upload.toFixed(2) : '',
      download: download.replace(',', '.'),
    });
  };

  onChangeMessage = (message) => this.setState({message});

  onPressMin = () => {
    const {limit, amount} = this.state.order.data;
    if (limit.oneTransaction) {
      this.onChangeUpload(amount);
    } else {
      this.onChangeUpload(limit.min);
    }
  };

  onPressMax = () => {
    const {limit, amount} = this.state.order.data;
    if (limit.oneTransaction) {
      this.onChangeUpload(amount);
    } else {
      this.onChangeUpload(limit.max);
    }
  };

  done = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {order, upload, download, message} = this.state;
    if (message.length === 0) {
      showToast('Введите сообщение');
      return;
    }
    if (upload.length === 0) {
      showToast('Введите сумму отправления');
      return;
    }
    if (download.length === 0) {
      showToast('Введите сумму получения');
      return;
    }

    const data = {
      id: order.id,
      msg: message,
      receive_amount: download,
      send_amount: upload,
    };
    showNetworkIndicator(true);
    postDealStore({user, data})
      .then((result) => replace('Chat', {id: result.data.data.id}))
      .catch((e) => _fetchError(this.props, e, 'postDealStore'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {order} = this.state;
    if (order) {
      const {upload, download, message} = this.state;
      const {exchange_rate, user} = order;
      const {direction, limit} = order.data;
      return (
        <Wrap titleView={<WrapBack />}>
          <View style={base.wrap1}>
            <WrapWarningSell
              cryptoCurrency={exchange_rate.crypto_code}
              currency={exchange_rate.fiat_code}
              userName={user.name}
              card={direction.name}
            />

            <WrapCourse
              cryptoCurrency={exchange_rate.crypto_code}
              currency={exchange_rate.fiat_code}
              currencyCount={exchange_rate.price}
            />

            <Text style={base.text1}>
              <Text style={base.text2}>Открытие сделки</Text>
              {limit.oneTransaction
                ? `${'\n'}Одной сделкой`
                : `${'\n'}Минимальная сумма сделки ${limit.min} ${
                    exchange_rate.fiat_code
                  }${'\n'}Максимальная сумма
              сделки ${limit.max} ${exchange_rate.fiat_code}`}
            </Text>

            <Text style={base.text3}>Вы отправляете</Text>
            <InputButtonsText
              value={upload}
              currency={exchange_rate.crypto_code}
              onChangeText={this.onChangeUpload}
              onPressMin={this.onPressMin}
              onPressMax={this.onPressMax}
            />

            <Text style={base.text3}>Вы получаете</Text>
            <InputButtonsText
              value={download}
              currency={exchange_rate.fiat_code}
              onChangeText={this.onChangeDownload}
              onPressMin={this.onPressMin}
              onPressMax={this.onPressMax}
            />

            <Text style={base.text4}>Отправьте сообщение (обязательно)</Text>
            <TextInput
              style={base.text5}
              value={message}
              placeholder="Поздоровайтесь. Мы рекомендуем использовать шифрованные сообщения для отправки платежных данных."
              placeholderTextColor="#5A5A5A"
              multiline
              onChangeText={this.onChangeMessage}
            />
          </View>
          <ButtonColor
            styleTouchable={base.margin1}
            style={base.button1}
            title="Открыть сделку"
            onPress={this.done}
          />
          <View style={base.wrap1}>
            <Text style={base.text6}>
              После открытия сделки сообщения шифруются для защиты вашей
              конфиденциальности. Мы сможем их прочесть только в случае
              инициации спора одной из сторон.
            </Text>
          </View>
        </Wrap>
      );
    }
    return <Wrap titleView={<WrapBack />} />;
  }
}
