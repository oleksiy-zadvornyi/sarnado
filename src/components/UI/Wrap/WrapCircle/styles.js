import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(16),
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    marginTop: wp(5),
    marginBottom: wp(11.5),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(13.5),
    lineHeight: wp(16),
    color: 'black',
  },
});

export default {base};
