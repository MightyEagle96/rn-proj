import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";

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
    setTodo("");
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
      <View style={styles.goalsContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "900",
            color: "#039be5",
            textAlign: "center",
          }}
        >
          YOUR GOALS LIST.
        </Text>
        {todos.map((c, i) => (
          <View key={i} style={styles.todoItem}>
            <Text style={{ fontSize: 35, fontWeight: "800", color: "#bdbdbd" }}>
              {i + 1}.
            </Text>
            <Text style={{ color: "#212121", fontSize: 24 }}>{c.todo}</Text>
            <Text
              style={{
                textAlign: "right",
                color: "#f06292",
                fontStyle: "italic",
              }}
            >
              {" "}
              {c.date}
            </Text>
          </View>
        ))}
      </View>
      {todos.length > 0 ? (
        <View
          style={{
            marginBottom: 40,
            marginTop: 20,
            flex: 1,
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

  goalsContainer: { marginTop: 10, flex: 3 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  todoItem: {
    marginBottom: 10,
    borderBottomWidth: 0.6,
    padding: 8,
    borderBottomColor: "#e0e0e0",
  },
});
