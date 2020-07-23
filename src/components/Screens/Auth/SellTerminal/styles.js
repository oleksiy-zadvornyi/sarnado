import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  button1: {
    backgroundColor: "#008316",
    marginVertical: wp(4),
  },
  wrap1: {
    width: wp(100),
    backgroundColor: "#9A2220",
    padding: 4,
  },
  wrap2: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(100),
    backgroundColor: "#013347",
    padding: 12,
  },
  text1: {
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    color: "white",
    lineHeight: wp(4),
    textAlign: "center",
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: wp(4.5),
    color: "white",
    lineHeight: wp(5),
    marginRight: 4,
  },
});

export default { base };
