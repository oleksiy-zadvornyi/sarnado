import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  margin1: {
    marginBottom: wp(5),
  },
  button1: {
    width: wp(50) - 13,
    backgroundColor: '#008316',
    borderWidth: 0,
    borderRadius: 0,
    borderBottomLeftRadius: wp(1),
  },
  button2: {
    backgroundColor: '#9A2220',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: wp(1),
  },
  buttonText1: {
    fontSize: wp(3),
    lineHeight: wp(4),
  },
  wrap1: {
    width: wp(100) - 26,
    borderRadius: wp(1),
    backgroundColor: '#013347',
    marginBottom: wp(5),
  },
  wrap2: {
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    paddingVertical: wp(2.5),
  },
  wrap3: {
    flex: 1,
  },
  wrap4: {
    flexDirection: 'row',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
  },
  text2: {
    fontFamily: 'RobotoBold',
    fontSize: wp(6),
    color: 'white',
    marginVertical: wp(2),
  },
});

export default {base};
