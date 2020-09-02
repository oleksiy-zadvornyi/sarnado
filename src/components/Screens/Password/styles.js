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
    borderWidth: 0,
    borderRadius: 0,
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: '#898989',
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: '#B5B5B5',
    textAlign: 'center',
    paddingHorizontal: wp(4),
  },
  input1: {
    borderRadius: wp(1),
    marginBottom: wp(4),
    backgroundColor: '#C4C4C4',
  },
});

export default {base};
