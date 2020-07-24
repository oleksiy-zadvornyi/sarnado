import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
  },
  center: {
    alignItems: "center",
  },
  text1: {
    fontSize: wp(3.5),
    lineHeight: wp(4),
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginTop: wp(4),
    marginBottom: wp(13),
  },
  text2: {
    fontSize: wp(3.5),
    lineHeight: wp(4),
    fontWeight: "bold",
    color: "white",
  },
  wrap1: {
    width: wp(100) - 26,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: wp(8),
    paddingTop: wp(4.5),
    paddingBottom: wp(4),
    borderRadius: wp(1),
  },
  wrap2: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrap3: {
    width: wp(33),
    backgroundColor: "#9A2220",
    alignItems: "center",
    padding: wp(2),
    borderRadius: wp(1),
  },
});

export default { base };
