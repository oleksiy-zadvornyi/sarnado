import { StyleSheet, Platform } from "react-native";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
  },
  wrap: {
    alignItems: "center",
  },
  wrap2: {
    flexGrow: 1,
    alignItems: "center",
  },
  backgroundColor: {
    backgroundColor: "#002331",
  },
  safe: {
    flex: 1,
    backgroundColor: "#002331",
  },
});

export default { base };
