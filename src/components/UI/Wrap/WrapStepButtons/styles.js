import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: 'white',
    padding: wp(3),
  },
  text2: {
    color: '#8A8A8A',
  },
  wrap1: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(5),
    marginTop: wp(2.5),
  },
  wrap2: {
    flex: 1,
    backgroundColor: '#9A2220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap3: {
    backgroundColor: '#6A0D0B',
  },
  wrap4: {
    width: wp(0.5),
  },
  wrap5: {
    flex: 1,
    backgroundColor: '#008316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap6: {
    backgroundColor: '#008316',
  },
});

export default {base};
