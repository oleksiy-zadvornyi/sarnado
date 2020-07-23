import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginBottom: wp(10),
  },
  margin2: {
    marginBottom: wp(7.5),
  },
  input1: {
    marginBottom: wp(6),
  },
  text1: {
    fontFamily: "Roboto",
    fontSize: wp(4),
    color: "white",
    lineHeight: wp(5),
    textAlign: "center",
    paddingHorizontal: wp(5),
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: wp(4),
    color: "white",
    lineHeight: wp(5),
  },
  button1: {
    backgroundColor: "#008316",
  },
  button2: {
    backgroundColor: "#9A2220",
  },
});

export default { base };
