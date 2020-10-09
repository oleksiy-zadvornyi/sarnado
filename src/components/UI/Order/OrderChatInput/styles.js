import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap: {
    width: wp(100) - 32,
    height: wp(14.5),
    backgroundColor: '#C4C4C4',
    borderRadius: wp(1),
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
