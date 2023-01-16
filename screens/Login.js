import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";

function LoginScreen() {
  //console.log(route);

  return (
    <View style={styles.loginView}>
      <View style={styles.loginBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          inputMode="email"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          type="password"
          secureTextEntry={true}
        />
        <Button title="Login" />
        <ActivityIndicator />
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginView: { flex: 1, justifyContent: "center" },
  loginBox: { paddingHorizontal: 20 },

  textInput: {
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderColor: "#2196f3",
    borderRadius: 5,
    marginBottom: 20,
  },
});
