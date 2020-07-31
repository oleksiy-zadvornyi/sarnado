import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap: {
    width: wp(100) - 26,
    height: wp(11),
    backgroundColor: 'white',
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
