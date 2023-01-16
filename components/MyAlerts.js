import { View, StyleSheet, Text } from "react-native";
function ErrorAlerts({ message }) {
  return (
    <View style={styles.alert}>
      <Text style={{ color: "white" }}>{message}</Text>
    </View>
  );
}

export { ErrorAlerts };

const styles = StyleSheet.create({
  alert: {
    height: 40,
    backgroundColor: "#f73378",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
});
