import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  tintColor1: {
    tintColor: 'black',
  },
  text1: {
    flex: 1,
    fontFamily: 'RobotoBold',
    fontSize: wp(6),
    color: 'black',
    marginRight: wp(2),
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: wp(4.5),
    color: 'black',
    lineHeight: wp(5),
    paddingVertical: wp(4),
    paddingHorizontal: wp(2),
  },
  wrap1: {
    width: wp(100) - 26,
    alignSelf: 'center',
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(4),
    paddingHorizontal: wp(5.5),
    borderRadius: wp(1),
  },
  wrap2: {
    minWidth: wp(60),
    backgroundColor: 'white',
    borderRadius: wp(1),
    borderColor: 'black',
    borderWidth: 0.7,
  },
});

export default {base};
