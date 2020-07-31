import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  button1: {
    width: wp(100) - 60,
    height: 31,
    backgroundColor: '#9A2220',
    marginBottom: wp(2),
    borderColor: 'white',
    borderWidth: 0.7,
  },
  buttonText1: {
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
  },
  image1: {
    width: 34,
    height: 34,
    borderRadius: 34,
  },
  image2: {
    alignSelf: 'flex-end',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    color: 'white',
    lineHeight: wp(4),
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: wp(2.5),
    color: '#008316',
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(2.5),
    color: '#9A2220',
  },
  text4: {
    fontFamily: 'Roboto',
    fontSize: wp(3.5),
    lineHeight: wp(4),
    color: 'white',
    paddingRight: 16,
    paddingLeft: 8,
  },
  text5: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text6: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: '#BC0D0D',
  },
  text7: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
    backgroundColor: '#008316',
    paddingHorizontal: wp(1),
  },
  wrap1: {
    width: wp(100) - 26,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#667b83',
    borderTopLeftRadius: wp(1),
    borderTopRightRadius: wp(1),
    backgroundColor: '#013347',
    marginTop: 14,
  },
  wrap2: {
    flexDirection: 'row',
    backgroundColor: '#002331',
    alignItems: 'center',
    paddingVertical: 4,
    borderTopLeftRadius: wp(1),
    borderTopRightRadius: wp(1),
  },
  wrap3: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#0DBC33',
    marginHorizontal: 8,
  },
  wrap4: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#9A2220',
  },
  wrap5: {
    marginLeft: 6,
  },
  wrap6: {
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
  },
  wrap7: {},
  wrap8: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  wrap9: {
    flexDirection: 'row',
  },
});

export default {base};
