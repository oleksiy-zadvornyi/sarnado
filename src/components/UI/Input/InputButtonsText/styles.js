import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    flexDirection: 'row',
    borderRadius: wp(1),
    marginBottom: wp(3),
    overflow: 'hidden',
  },
  wrap2: {
    backgroundColor: '#9A2220',
    padding: wp(3),
    borderBottomLeftRadius: wp(1),
    borderTopLeftRadius: wp(1),
  },
  wrap3: {
    backgroundColor: '#008316',
    padding: wp(3),
  },
  wrap4: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
  },
  wrap5: {
    width: wp(17),
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
    borderBottomRightRadius: wp(1),
    borderTopRightRadius: wp(1),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text3: {
    flex: 1,
    fontFamily: 'RobotoBold',
    fontSize: wp(3.5),
    color: 'black',
  },
  text4: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'black',
  },
});

export default {base};
