import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import Image from 'react-native-scalable-image';
import * as Images from '../../../helpers/images';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function TabBar() {
  const routes = [
    {
      key: 'pay',
      name: 'Купить',
      onPress: '',
    },
    {
      key: 'sell',
      name: 'Продать',
      onPress: '',
    },
    {
      key: 'replenish',
      name: 'Пополнить',
      onPress: '',
    },
    {
      key: 'withdraw',
      name: 'Вывести',
      onPress: '',
    },
    {
      key: 'cabinet',
      name: 'Кабинет',
      onPress: '',
    },
  ];

  return (
    <View style={base.flexDirection}>
      {routes.map((route, index) => {
        const onPress = () => {};

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
