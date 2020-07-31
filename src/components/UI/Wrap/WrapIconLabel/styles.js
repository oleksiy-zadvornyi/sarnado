import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(1),
    marginHorizontal: wp(6),
  },
  wrap2: {
    minWidth: wp(6),
  },
  wrap3: {
    tintColor: '#898989',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: '#898989',
    marginLeft: wp(2),
  },
});

export default {base};
