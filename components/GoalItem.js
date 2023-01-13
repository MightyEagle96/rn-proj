import { StyleSheet, View, Text } from "react-native";

function GoalItem({ itemData }) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: "white" }}>{itemData.item.todo}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    backgroundColor: "#2979ff",
    padding: 9,

    borderRadius: 10,
    fontSize: 18,
  },
});
