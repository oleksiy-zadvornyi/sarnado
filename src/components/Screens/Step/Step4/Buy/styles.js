import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  button1: {
    width: wp(100) - 26,
    backgroundColor: '#008316',
    borderRadius: 0,
  },
  margin1: {
    marginTop: wp(7),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
    marginBottom: wp(11.5),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    marginBottom: wp(7),
  },
  text3: {
    width: wp(100) - 26,
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    textAlign: 'center',
    marginTop: wp(15),
    marginBottom: wp(14),
  },
  text4: {
    fontFamily: 'RobotoBold',
    fontSize: wp(6),
    color: 'white',
  },
});

export default {base};
