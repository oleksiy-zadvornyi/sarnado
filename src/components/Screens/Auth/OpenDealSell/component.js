import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../../UI/Base/Wrap';
import ButtonColor from '../../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../../helpers/images';
import {goBack} from '../../../../helpers/navigation';

// Style
import {base} from './styles';

export default class OpenDealSell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  onChangeMessage = (message) => this.setState({message});

  render() {
    const {message} = this.state;
    return (
      <Wrap>
        <View style={base.wrap1}>
          <View style={base.wrap3}>
            <TouchableOpacity style={base.wrap2} onPress={goBack}>
              <Image source={Images.left} height={wp(3)} />
              <View style={base.wrap3}>
                <Text style={base.text1}>Назад</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={base.wrap4}>
          <Text style={base.text2}>
            <Text style={base.text3}>Внимание!</Text>
            {'\n'}
            Вы начинаете процедуру продажи!{'\n'}Вы продаете{' '}
            <Text style={base.text3}>USDT</Text> покупателю{' '}
            <Text style={[base.text3, base.text4]}>fortdeal</Text> ожидая
            перевод RUB на карту Сбербанк
          </Text>

          <View style={base.wrap5}>
            <Text style={base.text5}>
              Покупатель установил курс{'\n'}1 USDT = 71.73 RUB{'\n'}Продолжайте
              только если он вас устраивает!
            </Text>
          </View>

          <Text style={base.text6}>
            <Text style={base.text7}>Открытие сделки</Text>
            {'\n'}Минимальная сумма сделки 8004.72 RUB{'\n'}Максимальная сумма
            сделки 8004.72 RUB
          </Text>

          <Text style={base.text8}>Вы отправляете</Text>
          <View style={base.wrap6}>
            <View style={base.wrap7}>
              <Text style={base.text9}>min</Text>
            </View>
            <View style={base.wrap9}>
              <Text style={base.text10}>max</Text>
            </View>
            <View style={base.wrap10}>
              <Text style={base.text11}>111,238513242519</Text>
            </View>
            <View style={base.wrap8}>
              <Text style={base.text12}> USDT</Text>
            </View>
          </View>

          <Text style={base.text8}>Вы получаете</Text>
          <View style={base.wrap6}>
            <View style={base.wrap7}>
              <Text style={base.text9}>min</Text>
            </View>
            <View style={base.wrap9}>
              <Text style={base.text10}>max</Text>
            </View>
            <View style={base.wrap10}>
              <Text style={base.text11}>8004,72</Text>
            </View>
            <View style={base.wrap8}>
              <Text style={base.text12}>RUB</Text>
            </View>
          </View>

          <Text style={base.text13}>Отправьте сообщение (обязательно)</Text>
          <TextInput
            style={base.text14}
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
        />
        <View style={base.wrap4}>
          <Text style={base.text15}>
            После открытия сделки сообщения шифруются для защиты вашей
            конфиденциальности. Мы сможем их прочесть только в случае инициации
            спора одной из сторон.
          </Text>
        </View>
      </Wrap>
    );
  }
}
