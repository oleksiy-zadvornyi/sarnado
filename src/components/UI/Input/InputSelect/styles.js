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
    flex: 1,
    alignItems: 'flex-start',
  },
  input: {
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: 'black',
    paddingHorizontal: wp(4),
  },
  text1: {
    color: '#898989',
  },
  image1: {
    tintColor: '#898989',
    marginRight: wp(4),
  },
});

export default {base};
