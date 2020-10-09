import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    flex: 1,
    width: wp(100) - 32,
    backgroundColor: '#C4C4C4',
    borderRadius: wp(1),
    marginVertical: wp(2.5),
  },
  wrap2: {
    width: wp(100) - 32,
    backgroundColor: '#008316',
    borderWidth: 0,
    marginVertical: wp(2.5),
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
