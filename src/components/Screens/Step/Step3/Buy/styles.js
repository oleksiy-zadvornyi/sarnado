import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  button1: {
    width: wp(50) - 15,
    height: wp(12.75),
    backgroundColor: '#989696',
    borderWidth: 0,
  },
  button2: {
    backgroundColor: '#008316',
  },
  button3: {
    backgroundColor: '#9A2220',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
    marginBottom: wp(7),
  },
  text2: {
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),

    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
    marginTop: wp(5),
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    marginTop: wp(11),
    marginBottom: wp(9),
  },
  text4: {
    width: wp(100) - 26,
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    textAlign: 'center',
  },
  text5: {
    marginBottom: wp(9),
  },
  wrap1: {
    width: wp(100) - 26,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(4),
    marginBottom: wp(5),
  },
});

export default {base};
