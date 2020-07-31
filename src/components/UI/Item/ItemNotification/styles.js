import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
    marginBottom: wp(4),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
    textAlign: 'right',
  },
  wrap1: {
    width: wp(100) - 26,
    borderRadius: wp(1),
    backgroundColor: '#013347',
    marginBottom: wp(2),
    padding: wp(2),
  },
});

export default {base};
