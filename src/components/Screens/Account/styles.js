import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  input1: {
    marginBottom: wp(6),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    color: 'white',
    lineHeight: wp(5),
    textAlign: 'center',
    paddingHorizontal: wp(5),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    color: 'white',
    lineHeight: wp(5),
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    color: 'white',
    lineHeight: wp(5),
    textAlign: 'center',
    paddingHorizontal: wp(5),
    marginBottom: wp(3),
  },
  button1: {
    backgroundColor: '#008316',
  },
  button2: {
    backgroundColor: '#B9BC0D',
    marginBottom: wp(5),
  },
});

export default {base};
