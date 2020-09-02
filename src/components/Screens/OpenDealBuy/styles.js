import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginTop: wp(6),
    marginBottom: wp(4),
  },
  button1: {
    backgroundColor: '#008316',
    borderColor: 'black',
  },
  wrap1: {
    paddingVertical: wp(2),
    width: wp(90),
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: 'white',
    marginBottom: wp(4.5),
  },
  text2: {
    color: '#008316',
  },
  text3: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: 'white',
  },
  text4: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: 'white',
    marginTop: wp(2),
    marginLeft: wp(3),
    marginBottom: wp(1),
  },
  text5: {
    minHeight: wp(28),
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: '#5A5A5A',
    backgroundColor: '#C4C4C4',
    padding: wp(2.5),
    borderRadius: wp(1),
  },
  text6: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: '#A2A2A2',
  },
});

export default {base};
