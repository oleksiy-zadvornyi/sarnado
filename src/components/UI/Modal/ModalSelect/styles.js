import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  wrap1: {
    width: wp(100),
    backgroundColor: 'white',
    paddingTop: wp(8),
  },
  image1: {
    alignSelf: 'flex-end',
    marginRight: wp(4),
  },
});

export default {base};
