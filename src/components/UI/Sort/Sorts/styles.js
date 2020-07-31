import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    backgroundColor: '#013347',
    padding: wp(3),
  },
});

export default {base};
