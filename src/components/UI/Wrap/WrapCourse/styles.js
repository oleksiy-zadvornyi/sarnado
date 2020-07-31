import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    backgroundColor: '#C4C4C4',
    padding: wp(2),
    marginVertical: wp(3),
  },
  text1: {
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),
    color: 'black',
    textAlign: 'center',
  },
});

export default {base};
