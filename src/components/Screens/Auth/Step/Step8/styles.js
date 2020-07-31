import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginBottom: wp(5),
  },
  input1: {
    borderRadius: wp(1),
    marginBottom: wp(5),
  },
  input2: {
    minHeight: wp(28),
    borderRadius: wp(1),
    marginBottom: wp(5),
  },
  button1: {
    backgroundColor: '#C4C4C4',
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    width: wp(100) - 26,
    height: wp(13.75),
  },
  buttonSelect1: {
    backgroundColor: '#008316',
  },
  buttonText1: {
    fontFamily: 'RobotoBold',
    fontSize: wp(6),

    color: 'black',
  },
  buttonTextSelect1: {
    color: 'white',
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
