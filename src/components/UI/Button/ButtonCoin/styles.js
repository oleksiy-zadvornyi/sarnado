import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
  },
  tintColor1: {
    tintColor: "black",
  },
  tintColor2: {
    tintColor: "white",
  },
  wrap1: {
    backgroundColor: "#C4C4C4",
    paddingHorizontal: wp(5),
    flexDirection: "row",
    width: wp(100) - 26,
    height: wp(13.75),
    alignItems: "center",
    borderRadius: wp(1),
  },
  wrap2: {
    backgroundColor: "#008316",
    paddingHorizontal: wp(5),
    flexDirection: "row",
    width: wp(100) - 26,
    height: wp(13.75),
    alignItems: "center",
    borderRadius: wp(1),
  },
  text1: {
    fontSize: wp(6),
    fontWeight: "bold",
    color: "black",
  },
  text2: {
    fontSize: wp(6),
    fontWeight: "bold",
    color: "white",
  },
});

export default { base };
