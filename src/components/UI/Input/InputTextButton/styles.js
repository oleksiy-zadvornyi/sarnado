import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    width: wp(100) - 26,
    height: wp(11),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrap2: {
    width: wp(33),
    backgroundColor: '#008316',
    borderWidth: 0,
    borderRadius: 0,
    borderTopRightRadius: wp(1),
    borderBottomRightRadius: wp(1),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
  },
  input: {
    flex: 1,
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: 'black',
    paddingHorizontal: wp(4),
  },
});

export default {base};
