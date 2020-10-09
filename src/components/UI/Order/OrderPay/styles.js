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
    justifyContent: 'center',
    width: wp(100),
    backgroundColor: '#013347',
    padding: wp(2),
    marginVertical: wp(2),
  },
  wrap2: {
    flex: 1,
    marginVertical: wp(2.5),
  },
  wrap3: {
    width: wp(100) - 32,
    backgroundColor: '#008316',
    borderWidth: 0,
    marginVertical: wp(2.5),
  },
  wrap4: {
    width: wp(100),
    paddingHorizontal: 26,
    flexDirection: 'row',
  },
  wrap5: {
    backgroundColor: '#013347',
  },
  wrap6: {
    width: wp(100) - 32,
    backgroundColor: '#9A2220',
    borderWidth: 0,
    marginVertical: wp(2.5),
  },
  text1: {
    fontFamily: 'RobotoBold',
    fontSize: wp(4.5),
    lineHeight: wp(5),
    color: 'white',
    textAlign: 'center',
    marginRight: wp(2),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: '#6A6969',
    textAlign: 'center',
  },
  text3: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(8),
    color: 'white',
  },
  text4: {
    textAlign: 'center',
  },
});

export default {base};
