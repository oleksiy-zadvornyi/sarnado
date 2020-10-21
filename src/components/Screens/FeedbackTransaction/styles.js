import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap1: {
    paddingVertical: wp(2),
    width: wp(90),
  },
  wrap2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: wp(10),
  },
  wrap3: {
    tintColor: '#008316',
  },
  wrap4: {
    tintColor: '#9A2220',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: 'white',
    marginTop: wp(2),
    marginLeft: wp(3),
    marginBottom: wp(1),
  },
  text2: {
    minHeight: wp(28),
    textAlignVertical: 'top',
    fontFamily: 'Roboto',
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: '#5A5A5A',
    backgroundColor: '#C4C4C4',
    padding: wp(2.5),
    borderRadius: wp(1),
  },
  margin1: {
    marginTop: wp(6),
    marginBottom: wp(4),
  },
  button1: {
    backgroundColor: '#008316',
    borderColor: 'black',
  },
});

export default {base};
