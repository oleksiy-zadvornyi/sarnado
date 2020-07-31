import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginBottom: wp(5),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
    marginBottom: wp(4),
    alignSelf: 'flex-start',
  },
  text2: {
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),

    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
  },
});

export default {base};
