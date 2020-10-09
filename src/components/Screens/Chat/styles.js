import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap1: {
    marginBottom: wp(4),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
});

export default {base};
