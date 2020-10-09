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
    borderBottomColor: '#667b83',
    borderBottomWidth: 1,
  },
  wrap2: {
    flex: 1,
    height: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap3: {
    backgroundColor: '#667b83',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    lineHeight: wp(4.5),
    color: 'white',
  },
});

export default {base};
