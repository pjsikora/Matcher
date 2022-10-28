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
} from "react-native";

const user = {
  email: "bartlomiej.wydrzycki@gmail.com",
};

interface EditEmailProps {
  navigation: any;
}
const EditEmail = ({ navigation }: EditEmailProps) => {
  const [isVerificationCodeSend, setIsVerificationCodeSend] = useState(false);
  const [enteredNewEmail, setEnteredNewEmail] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.allContains}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Email</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("settings");
              setIsVerificationCodeSend(false);
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.curContainer}>
            <Text
              style={{
                fontSize: 14,
                color: "#1E1E1E",
                fontFamily: "montRegular",
              }}
            >
              Your current email
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#CF56A1",
                fontFamily: "montMedium",
              }}
            >
              {user.email}
            </Text>
          </View>

          <View style={styles.formContainer}>
            <Text
              style={{
                fontSize: 16,
                color: "1E1E1E",
                fontFamily: "montRegular",
              }}
            >
              Change your email
            </Text>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require("../../images/mailVector.png")}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your new email"
                placeholderTextColor="#ABABAB"
                value={enteredNewEmail}
                onChangeText={(newEmail) => setEnteredNewEmail(newEmail)}
              />
            </View>
            {isVerificationCodeSend && (
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter verification code"
                  placeholderTextColor="#ABABAB"
                />
              </View>
            )}
            <View style={styles.buttonsContainer}>
              {isVerificationCodeSend && (
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#1E1E1E",
                      fontFamily: "montRegular",
                    }}
                  >
                    Resend verification code
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => {
                  setIsVerificationCodeSend(true);
                }}
              >
                {!isVerificationCodeSend && (
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 16,
                      fontFamily: "montMedium",
                    }}
                  >
                    Send verification code
                  </Text>
                )}
                {isVerificationCodeSend && (
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 16,
                      fontFamily: "montMedium",
                    }}
                  >
                    Submit
                  </Text>
                )}
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
    padding: 10,
    // borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginTop: "3%",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
  },
  input: {
    width: "90%",
    height: "100%",
    color: "#1E1E1E",
    lineHeight: 23,
    fontFamily: "montRegular",
  },
  icon: {
    marginTop: "5%",
    marginRight: "2%",
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
});

export default EditEmail;
