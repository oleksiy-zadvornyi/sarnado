import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  margin1: {
    marginTop: wp(1),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(4),
    color: 'white',
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(2.5),
    lineHeight: wp(4),
    color: 'white',
  },
  text3: {
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: wp(2.5),
    lineHeight: wp(4),
    color: 'white',
  },
  text4: {
    textAlign: 'right',
    fontFamily: 'RobotoBold',
    fontSize: wp(2.5),
    lineHeight: wp(4),
    color: 'white',
  },
  text5: {
    fontSize: wp(2.5),
  },
  wrap1: {
    width: wp(100) - 26,
    borderRadius: wp(1),
    backgroundColor: '#013347',
    marginBottom: wp(1),
    overflow: 'hidden',
  },
  wrap2: {
    flexDirection: 'row',
    padding: wp(2),
  },
  wrap3: {
    borderRadius: wp(13),
  },
  wrap4: {
    marginHorizontal: wp(2),
  },
  wrap5: {
    overflow: 'hidden',
    height: wp(5.5),
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: '#008316',
  },
});

export default {base};
