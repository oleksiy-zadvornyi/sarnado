import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import WrapExit from '../../../../UI/Wrap/WrapExit';

// Helpers
import {goBack} from '../../../../../helpers/navigation';

// Style
import {base} from './styles';
import ButtonColor from '../../../../UI/Button/ButtonColor/component';

export default class Step9 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <View style={base.flex} />
        <Text style={base.text1}>
          Давайте проверим все данные сделки перед размещением
        </Text>
        <View style={base.flex} />

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Вы продаете
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            1 BTC
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Предложение в стране
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            Россия
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Предложение в городе
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            Саратов
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Способ приема средств
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            Яндекс.Деньги
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Валюта приема
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            RUB (Российский Рубль)
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Процент маржи
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            2% profit
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Мin/Мax сумма сделки
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            Одной транзакцией
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Курс продажи
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            Bitfinex
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Время активности
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            Всегда
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Общая сделка на сумму
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            643097.89 RUB
          </Text>
        </View>

        <View style={[base.wrap1, base.wrap2]}>
          <Text numberOfLines={1} style={base.text2}>
            Процент эскроу сервиса
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            0.5% (0.005 BTC)
          </Text>
        </View>

        <View style={base.wrap1}>
          <Text numberOfLines={1} style={base.text2}>
            Текущий курс продажи
          </Text>
          <Text numberOfLines={1} style={[base.text2, base.text3]}>
            1 BTC = 643097.89 RUB
          </Text>
        </View>

        <View style={base.flex} />
        <Text style={base.text4}>
          Внимательно проверьте все данные сделки и если все верно, то
          разместите свой ордер!
        </Text>
        <ButtonColor
          style={base.button1}
          styleText={base.text5}
          title="Предыдущий"
          onPress={goBack}
        />
        <ButtonColor
          style={[base.button1, base.button2]}
          styleText={base.text5}
          title="Разместить ордер"
        />
      </Wrap>
    );
  }
}
