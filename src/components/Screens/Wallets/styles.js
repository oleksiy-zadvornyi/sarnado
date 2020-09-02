import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap1: {
    paddingTop: wp(7.5),
  },
});

export default {base};
