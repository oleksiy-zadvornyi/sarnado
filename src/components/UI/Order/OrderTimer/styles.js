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
    width: wp(100),
    backgroundColor: '#252525',
    paddingVertical: wp(1),
    paddingHorizontal: wp(3),
  },
  wrap2: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(4.5),
    color: 'white',
  },
  text2: {
    width: wp(25),
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(4.5),
    color: 'white',
    backgroundColor: '#0DBC33',
    textAlign: 'center',
    marginTop: wp(1),
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
    backgroundColor: '#0DBC33',
    textAlign: 'center',
    paddingHorizontal: wp(2),
  },
});

export default {base};
