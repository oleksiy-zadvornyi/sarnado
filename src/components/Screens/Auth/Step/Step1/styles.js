import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginVertical: wp(2.5),
  },
  text1: {
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    lineHeight: wp(4),
    color: "white",
    marginLeft: wp(2),
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(4),
    color: "white",
  },
  text3: {
    fontFamily: "Roboto",
    fontSize: wp(13.5),
    lineHeight: wp(16),
    color: "black",
  },
  text4: {
    height: wp(11),
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: "white",
    paddingHorizontal: wp(4),
  },
  text5: {
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: "#8A8A8A",
    padding: wp(3),
  },
  text6: {
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    lineHeight: wp(5.5),
    color: "white",
    padding: wp(3),
  },
  wrap1: {
    width: wp(100),
    backgroundColor: "#252525",
    paddingVertical: wp(3),
    paddingHorizontal: wp(4.5),
  },
  wrap2: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  wrap3: {
    flexDirection: "row",
  },
  wrap4: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(16),
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    marginTop: wp(5),
    marginBottom: wp(11.5),
  },
  wrap5: {
    width: wp(100),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: wp(5),
    marginTop: wp(2.5),
  },
  wrap6: {
    flex: 1,
    backgroundColor: "#6A0D0B",
    alignItems: "center",
    justifyContent: "center",
  },
  wrap7: {
    flex: 1,
    backgroundColor: "#008316",
    alignItems: "center",
    justifyContent: "center",
  },
  wrap8: {
    width: wp(0.5),
  },
});

export default { base };
