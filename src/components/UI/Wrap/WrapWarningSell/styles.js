import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text2: {
    color: '#9A2220',
  },
  text3: {
    textDecorationLine: 'underline',
    textDecorationColor: '#9A2220',
  },
});

export default {base};
