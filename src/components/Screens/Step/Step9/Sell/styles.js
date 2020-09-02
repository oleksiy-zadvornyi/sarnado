import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  button1: {
    backgroundColor: '#9A2220',
    width: wp(100),
    borderRadius: 0,
    borderWidth: 0,
  },
  button2: {
    marginVertical: wp(5),
    backgroundColor: '#008316',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(4),
  },
  text2: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(8),
    color: 'white',
  },
  text3: {
    textAlign: 'center',
  },
  text4: {
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    textAlign: 'center',
    color: 'white',
    marginBottom: wp(3),
  },
  text5: {
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
  },
  wrap1: {
    width: wp(100),
    paddingHorizontal: 26,
    flexDirection: 'row',
  },
  wrap2: {
    backgroundColor: '#013347',
  },
});

export default {base};
