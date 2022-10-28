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

interface EditLocationProps {
  navigation: any;
}
const EditLocation = ({ navigation }: EditLocationProps) => {
  const [enteredLocation, setEnteredLocation] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.allContains}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Location</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("settings");
              setEnteredLocation("");
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your location"
                placeholderTextColor="#ABABAB"
                value={enteredLocation}
                onChangeText={(newLocation) => setEnteredLocation(newLocation)}
              />
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
  input: {
    width: "80%",
    height: "100%",
    color: "#1E1E1E",
    lineHeight: 23,
    fontFamily: "montRegular",
  },
});

export default EditLocation;
