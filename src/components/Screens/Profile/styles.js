import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  input1: {
    borderRadius: wp(1),
    marginBottom: wp(4),
  },
  inputStyle1: {
    fontSize: wp(4.5),
    lineHeight: wp(5.5),
    color: '#050505',
  },
  wrap1: {
    marginHorizontal: 16,
  },
  text1: {
    padding: wp(4),
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: '#B5B5B5',
  },
});

export default {base};
