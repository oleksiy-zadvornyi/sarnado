import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  button1: {
    backgroundColor: '#008316',
    marginVertical: wp(4),
  },
  wrap1: {
    width: wp(100),
    backgroundColor: '#008316',
    padding: 4,
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    color: 'white',
    lineHeight: wp(4),
    textAlign: 'center',
  },
});

export default {base};
