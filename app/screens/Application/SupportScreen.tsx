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
import RNPickerSelect from "react-native-picker-select";

interface SupportScreenProps {
  navigation: any;
}
const SupportScreen = ({ navigation }: SupportScreenProps) => {
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.allContains}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Contact Us</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("settings");
              setEnteredSubject("");
              setEnteredMessage("");
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <RNPickerSelect
              placeholder={{
                label: "Choose a category",
                value: null,
              }}
              onValueChange={(value) => setEnteredCategory(value)}
              items={[
                { label: "Troubleshooting", value: "troubleShooting" },
                { label: "Security & Privacy", value: "securityAndPrivacy" },
                { label: "Safety & Reporting", value: "safetyAndReporting" },
                { label: "Another...", value: "another" },
              ]}
              style={pickerSelectStyles}
            />
            <View style={styles.formItemContainer}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#1E1E1E",
                  fontFamily: "montMedium",
                }}
              >
                Subject
              </Text>
              <TextInput
                style={styles.subjectInput}
                value={enteredSubject}
                onChangeText={(value) => setEnteredSubject(value)}
              />
            </View>
            <View style={styles.formItemContainer}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#1E1E1E",
                  fontFamily: "montMedium",
                }}
              >
                Message
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={6}
                style={styles.messageInput}
                placeholderTextColor="#ABABAB"
                onChangeText={(value) => setEnteredMessage(value)}
                value={enteredMessage}
              />
            </View>
            <TouchableOpacity style={styles.sendButton}>
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
    </TouchableWithoutFeedback>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "70%",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#ABABAB",
    borderRadius: 5,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: "70%",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#ABABAB",
    borderRadius: 5,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    color: "#767676",
    fontFamily: "montSBold",
  },
});

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
    height: "75%",
    display: "flex",
    marginTop: "10%",
  },
  formItemContainer: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: "10%",
    // backgroundColor: "red",
  },
  subjectInput: {
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 5,
    height: 40,
    marginTop: "3%",
    padding: 5,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 5,
    height: 200,
    marginTop: "3%",
    padding: 5,
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
});

export default SupportScreen;
