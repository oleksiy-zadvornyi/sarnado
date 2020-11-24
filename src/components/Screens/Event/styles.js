import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap1: {
    marginVertical: wp(11),
  },
  wrap2: {
    backgroundColor: '#008316',
  },
  input1: {
    borderRadius: wp(1),
    marginVertical: wp(4),
    backgroundColor: '#C4C4C4',
  },
});

export default {base};
