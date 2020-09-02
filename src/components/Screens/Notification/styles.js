import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginTop: wp(5),
    marginBottom: wp(1),
  },
  button1: {
    backgroundColor: '#008316',
    borderRadius: 0,
    borderWidth: 0,
  },
  wrap1: {
    paddingTop: wp(2),
  },
});

export default {base};
