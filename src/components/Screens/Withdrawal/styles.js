import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginVertical: wp(6.5),
  },
  margin2: {
    marginBottom: wp(5),
  },
  button1: {
    borderRadius: 0,
    backgroundColor: '#008316',
    marginTop: wp(7),
    borderWidth: 0,
  },
  buttonText1: {
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
  },
  inputText1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
  },
  input1: {
    minHeight: wp(28),
    width: wp(100) - 26,
    borderRadius: wp(1),
    backgroundColor: '#C4C4C4',
  },
  wrap1: {
    width: wp(100) - 26,
    height: wp(13.75),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    marginVertical: wp(3.5),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
  },
  text3: {
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text4: {
    fontFamily: 'Roboto',
    fontSize: wp(6),
    color: 'white',
  },
});

export default {base};
