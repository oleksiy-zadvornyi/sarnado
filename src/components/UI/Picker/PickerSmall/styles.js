import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    color: 'white',
    lineHeight: wp(5),
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrap2: {
    minWidth: wp(60),
    maxHeight: hp(80),
    backgroundColor: 'white',
    borderRadius: wp(1),
    borderColor: 'black',
    borderWidth: 0.7,
  },
});

export default {base};
