import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import Image from 'react-native-scalable-image';
import * as Images from '../../../helpers/images';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {navigate} from '../../../helpers/navigation';

export function TabBar() {
  const routes = [
    {
      key: 'pay',
      name: 'Купить',
      onPress: 'BuyTerminal',
    },
    {
      key: 'sell',
      name: 'Продать',
      onPress: 'SellTerminal',
    },
    {
      key: 'replenish',
      name: 'Пополнить',
      onPress: 'Wallets',
    },
    {
      key: 'withdraw',
      name: 'Вывести',
      onPress: 'Wallets',
    },
    {
      key: 'cabinet',
      name: 'Кабинет',
      onPress: 'Account',
    },
  ];

  return (
    <View style={base.flexDirection}>
      {routes.map((route, index) => {
        const onPress = () => {
          navigate(route.onPress);
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={base.wrap}>
            <Image source={Images[route.key]} height={20} />
            <Text style={base.text}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const base = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: wp(1.5),
    paddingBottom: Platform.OS === 'ios' ? wp(5) : wp(1.5),
  },
  flexDirection: {
    flexDirection: 'row',
    backgroundColor: '#252525',
  },
  text: {
    fontSize: wp(3),
    color: 'white',
  },
});

export default {base};
