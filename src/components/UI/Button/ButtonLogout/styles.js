import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    marginVertical: wp(2.5),
  },
  wrap2: {
    width: wp(100) - 26,
    height: wp(11),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#470101',
    paddingHorizontal: wp(4),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(4.5),
    color: 'white',
    paddingHorizontal: wp(2),
  },
});

export default {base};
