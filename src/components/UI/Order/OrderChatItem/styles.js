import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1.5),
    paddingVertical: wp(1),
  },
  wrap2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: wp(1.5),
    paddingVertical: wp(1),
  },
  wrap3: {
    flex: 1,
    alignItems: 'flex-end',
  },
  wrap4: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(1.5),
    paddingVertical: wp(1),
  },
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: wp(4),
    color: '#737373',
  },
  text2: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: wp(4),
    color: 'black',
  },
  image1: {
    width: wp(13),
    height: wp(13),
    borderRadius: wp(13),
    marginHorizontal: wp(1),
  },
});

export default {base};
