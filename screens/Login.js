import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpService } from "../services/httpService";
import { ErrorAlerts } from "../components/MyAlerts";
import { LoginContext } from "../contexts/LoginContext";

function LoginScreen({ navigation }) {
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { setToken } = useContext(LoginContext);
  const login = async () => {
    if (loginData.emailAddress && loginData.password) {
      setLoading(true);
      const res = await httpService.post("mobile-login", loginData);
      if (res) {
        if (res.type === "error") {
          setMessage(res.message);

          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }

        if (res.data) {
          setToken(res.data.accessToken);
          await AsyncStorage.setItem("token", res.data.accessToken);
          await AsyncStorage.setItem(
            "userData",
            JSON.stringify(res.data.account)
          );
          navigation.navigate("Home");
        }
        setLoading(false);
      } else setLoading(false);
    } else {
      alert("Please flll in both fields");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      //  behavior="padding"
      style={styles.container}
    >
      <View style={styles.loginView}>
        <View style={styles.loginBox}>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: "#2196f3",
                fontSize: 24,
                fontWeight: "600",
                alignContent: "center",
              }}
            >
              Login into your account
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            inputMode="email"
            onChangeText={(e) =>
              setLoginData({ ...loginData, emailAddress: e })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            type="password"
            secureTextEntry={true}
            onChangeText={(e) => setLoginData({ ...loginData, password: e })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            type="password"
            secureTextEntry={true}
            onChangeText={(e) => setLoginData({ ...loginData, password: e })}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonView}>
              <View style={{ marginRight: 10 }}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Button title="Login" onPress={login} />
                )}
              </View>
              <View>
                <Button title="Cancel" onPress={login} color="#f73378" />
              </View>
            </View>
          </View>

          {message ? <ErrorAlerts message={message} /> : null}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginView: { height: "100%", justifyContent: "center", marginBottom: 40 },
  loginBox: { paddingHorizontal: 20, justifyContent: "center" },

  buttonContainer: { alignItems: "center" },
  buttonView: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderColor: "#2196f3",
    borderRadius: 5,
    marginBottom: 20,
  },
  container: { flex: 1 },
});
