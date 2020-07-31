import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  wrap1: {
    height: wp(13.75),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(1),
    marginBottom: wp(3),
    overflow: 'hidden',
  },
  wrap2: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
  },
  wrap3: {
    width: wp(20),
    height: wp(13.75),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9A2220',
  },
  wrap4: {
    width: wp(20),
    height: wp(13.75),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008316',
  },
  text1: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    color: 'black',
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
  },
});

export default {base};
