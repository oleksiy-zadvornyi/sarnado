import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  margin1: {
    marginTop: wp(6),
    marginBottom: wp(4),
  },
  button1: {
    backgroundColor: "#008316",
    borderColor: "black",
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
    paddingVertical: wp(2),
    width: wp(90),
  },
  wrap5: {
    backgroundColor: "#C4C4C4",
    padding: wp(2),
    marginVertical: wp(3),
  },
  wrap6: {
    flexDirection: "row",
    borderRadius: wp(1),
    marginBottom: wp(3),
  },
  wrap7: {
    backgroundColor: "#9A2220",
    padding: wp(3),
    borderBottomLeftRadius: wp(1),
    borderTopLeftRadius: wp(1),
  },
  wrap8: {
    width: wp(17),
    backgroundColor: "white",
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
    borderBottomRightRadius: wp(1),
    borderTopRightRadius: wp(1),
  },
  wrap9: {
    backgroundColor: "#008316",
    padding: wp(3),
  },
  wrap10: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
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
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: "white",
  },
  text3: {
    color: "#9A2220",
  },
  text4: {
    textDecorationLine: "underline",
    textDecorationColor: "#9A2220",
  },
  text5: {
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  text6: {
    fontFamily: "Roboto",
    fontSize: wp(4),
    lineHeight: wp(5.5),
    color: "white",
    marginBottom: wp(4.5),
  },
  text7: {
    color: "#008316",
  },
  text8: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: "white",
  },
  text9: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: "white",
  },
  text10: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: "white",
  },
  text11: {
    fontFamily: "Roboto",
    fontSize: wp(3.5),
    fontWeight: "bold",
    lineHeight: wp(5.5),
    color: "black",
  },
  text12: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: "black",
  },
  text13: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: "white",
    marginTop: wp(2),
    marginLeft: wp(3),
    marginBottom: wp(1),
  },
  text14: {
    minHeight: wp(28),
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(3.5),
    color: "#5A5A5A",
    backgroundColor: "#C4C4C4",
    padding: wp(2.5),
    borderRadius: wp(1),
  },
  text15: {
    fontFamily: "Roboto",
    fontSize: wp(3),
    lineHeight: wp(5.5),
    color: "#A2A2A2",
  },
});

export default { base };
