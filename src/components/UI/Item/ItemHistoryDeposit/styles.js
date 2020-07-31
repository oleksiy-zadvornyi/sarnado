import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#008316',
    borderRadius: 0,
    borderWidth: 0,
    height: wp(5.5),
  },
  margin1: {
    marginHorizontal: wp(2),
  },
  margin2: {
    marginVertical: wp(2),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(4.5),
    color: 'white',
    marginTop: wp(3.5),
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(4),
    color: 'white',
  },
  text4: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
    paddingHorizontal: wp(2),
  },
  wrap1: {
    overflow: 'hidden',
    width: wp(100) - 26,
    borderRadius: wp(1),
    backgroundColor: '#013347',
    marginBottom: wp(5),
  },
  wrap2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(2),
    paddingBottom: wp(1),
  },
  wrap3: {
    alignItems: 'flex-end',
  },
  wrap4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default {base};
