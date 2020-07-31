import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    width: wp(100),
    backgroundColor: '#252525',
    paddingVertical: wp(3),
    paddingHorizontal: wp(4.5),
  },
  wrap2: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrap3: {
    flexDirection: 'row',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(4),
    color: 'white',
    marginLeft: wp(2),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
  },
});

export default {base};
