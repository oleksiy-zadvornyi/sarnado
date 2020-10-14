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
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: 'white',
    marginTop: wp(2),
    marginLeft: wp(3),
    marginBottom: wp(1),
  },
  text2: {
    minHeight: wp(28),
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: '#5A5A5A',
    backgroundColor: '#C4C4C4',
    padding: wp(2.5),
    borderRadius: wp(1),
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
