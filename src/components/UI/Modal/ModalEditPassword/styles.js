import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  wrap1: {
    width: wp(100),
    backgroundColor: '#002331',
    alignItems: 'center',
    paddingHorizontal: wp(8),
    paddingTop: wp(4.5),
    paddingBottom: wp(4),
    borderRadius: wp(1),
  },
  input1: {
    borderRadius: wp(1),
    marginBottom: wp(4),
  },
  button1: {
    backgroundColor: '#008316',
  },
});

export default {base};
