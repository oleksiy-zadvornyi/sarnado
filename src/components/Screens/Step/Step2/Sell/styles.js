import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginTop: wp(14),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
    paddingVertical: wp(4),
  },
});

export default {base};
