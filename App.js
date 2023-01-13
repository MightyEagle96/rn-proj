import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const getTodo = (e) => {
    setTodo(e);
  };
  const addTodo = (data) => {
    setTodos((oldArray) => [
      ...oldArray,
      { todo: data, date: new Date().toTimeString() },
    ]);
    // setTodo("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Goal"
          onChangeText={getTodo}
          value={todo}
        />
        <Button title="Add Goal" onPress={() => addTodo(todo)} />
      </View>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 15,
          fontWeight: "900",
          color: "#039be5",
          textAlign: "center",
        }}
      >
        Your Goals List
      </Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
          }}
        />
      </View>

      {todos.length > 0 ? (
        <View
          style={{
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Clear Goals"
            color="#e91e63"
            onPress={() => setTodos([])}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: "75%",
    padding: 8,
    borderColor: "#e0e0e0",
    borderRadius: 10,
  },
  appContainer: { padding: 20, marginTop: 30, flex: 1 },

  goalsContainer: { flex: 5 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
  },

  todoItem: {
    marginBottom: 10,
    borderBottomWidth: 0.6,
    padding: 8,
    borderBottomColor: "#e0e0e0",
  },
});
