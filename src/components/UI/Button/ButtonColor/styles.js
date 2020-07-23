import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap: {
    width: wp(100) - 26,
    height: wp(11),
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: wp(1),
  },
  text1: {
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: 'white',
  },
});

export default {base};
