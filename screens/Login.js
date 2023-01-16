import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { httpService } from "../services/httpService";

function LoginScreen() {
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    const res = await httpService.post("login", loginData);

    if (res) console.log(res);
    setLoading(false);
  };

  return (
    <View style={styles.loginView}>
      <View style={styles.loginBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          inputMode="email"
          onChangeText={(e) => setLoginData({ ...loginData, emailAddress: e })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          type="password"
          secureTextEntry={true}
          onChangeText={(e) => setLoginData({ ...loginData, password: e })}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button title="Login" onPress={login} />
        )}
        {/* <ActivityIndicator /> */}
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
