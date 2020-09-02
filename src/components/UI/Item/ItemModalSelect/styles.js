import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(5),
    color: 'black',
    paddingVertical: wp(2),
    paddingHorizontal: wp(4),
  },
});

export default {base};
