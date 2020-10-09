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
    paddingHorizontal: 16,
    paddingVertical: wp(2),
  },
  text1: {
    flex: 1,
    fontFamily: 'RobotoBold',
    fontSize: wp(4.5),
    lineHeight: wp(5),
    color: 'white',
    textAlign: 'center',
  },
});

export default {base};
