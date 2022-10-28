import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

const user = {
  password: "zaq1@WSX",
};

interface EditPasswordProps {
  navigation: any;
}
const EditPassword = ({ navigation }: EditPasswordProps) => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [enteredOldPassword, setEnteredOldPassword] = useState("");
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.allContains}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Password</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("settings");
              setIsPasswordCorrect(false);
              setEnteredOldPassword("");
              setEnteredNewPassword("");
              setConfirmPassword("");
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View
              style={
                !isPasswordCorrect
                  ? styles.textInputContainer
                  : styles.textInputContainerDisabled
              }
            >
              <Image
                style={styles.icon}
                source={require("../../images/lockIcon.png")}
              />
              <TextInput
                editable={!isPasswordCorrect}
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#ABABAB"
                secureTextEntry={true}
                value={enteredOldPassword}
                onChangeText={(oldPassword) =>
                  setEnteredOldPassword(oldPassword)
                }
              />
            </View>
            {isPasswordCorrect && (
              <>
                <View style={styles.textInputContainer}>
                  <Image
                    style={styles.icon}
                    source={require("../../images/lockIcon.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your new password"
                    placeholderTextColor="#ABABAB"
                    secureTextEntry={isPasswordSecured}
                    value={enteredNewPassword}
                    onChangeText={(newPassword) =>
                      setEnteredNewPassword(newPassword)
                    }
                  />
                  <TouchableOpacity
                    style={styles.iconRight}
                    onPress={() => {
                      setIsPasswordSecured(!isPasswordSecured);
                    }}
                  >
                    <Image
                      source={
                        isPasswordSecured
                          ? require("../../images/eyeIcon.png")
                          : require("../../images/eyeSlashIcon.png")
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.textInputContainer}>
                  <Image
                    style={styles.icon}
                    source={require("../../images/lockIcon.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm your new password"
                    placeholderTextColor="#ABABAB"
                    secureTextEntry={isPasswordSecured}
                    value={confirmPassword}
                    onChangeText={(newPassword) =>
                      setConfirmPassword(newPassword)
                    }
                  />
                </View>
              </>
            )}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => {
                  if (enteredOldPassword === user.password) {
                    setIsPasswordCorrect(true);
                  } else {
                    Alert.alert("Password is incorrect", "Please. Try again.", [
                      { text: "OK", onPress: () => console.log("OK Pressed") },
                    ]);
                  }
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 16,
                    fontFamily: "montMedium",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  allContains: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  headerContainer: {
    width: "85%",
    height: 70,
    display: "flex",
    marginTop: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    display: "flex",
    width: "85%",
    alignItems: "center",
  },
  curContainer: {
    width: "100%",
    height: "20%",
    marginTop: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 34,
    fontFamily: "montSBold",
    color: "#1E1E1E",
  },
  done: {
    fontSize: 20,
    color: "#CF56A1",
    fontFamily: "montSBold",
  },
  formContainer: {
    width: "90%",
    height: "35%",
    display: "flex",
    marginTop: "10%",
  },
  textInputContainer: {
    width: "100%",
    height: "30%",
    paddingBottom: 3,
    // borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginTop: "3%",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    // paddingTop: 5,
    marginBottom: "15%",
  },
  textInputContainerDisabled: {
    width: "100%",
    height: "30%",
    paddingBottom: 3,
    // borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginTop: "3%",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    // paddingTop: 5,
    opacity: 0.5,
    marginBottom: "15%",
  },
  input: {
    width: "80%",
    height: "100%",
    color: "#1E1E1E",
    lineHeight: 23,
    fontFamily: "montRegular",
  },
  icon: {
    marginRight: "2%",
    marginTop: "2.5%",
  },
  sendButton: {
    backgroundColor: "#CF56A1",
    borderRadius: 10,
    height: 50,
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginTop: "10%",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  iconRight: {
    marginTop: "4%",
    marginLeft: "4%",
  },
});

export default EditPassword;
