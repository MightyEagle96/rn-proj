import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, deleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{
          color: "#40c4ff",
          borderless: true,
        }}
        onPress={() => deleteGoal(itemData.item.todo)}
      >
        <Text style={{ color: "white", padding: 10 }}>
          {itemData.item.todo}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    backgroundColor: "#2979ff",
    //padding: 9,
    borderRadius: 10,
    fontSize: 18,
  },
});
