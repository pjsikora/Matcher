import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const user = {
  gender: "Male",
};

interface EditGenderProps {
  navigation: any;
}
const EditGender = ({ navigation }: EditGenderProps) => {
  const [gender, setGender] = useState(user.gender);

  return (
    <View style={styles.allContains}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Gender</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("edit");
          }}
        >
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                setGender("Male");
              }}
            >
              {gender === "Male" && <View style={styles.circleFill}></View>}
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: "#1E1E1E",
                fontFamily: "montMedium",
              }}
            >
              Male
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                setGender("Female");
              }}
            >
              {gender === "Female" && <View style={styles.circleFill}></View>}
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: "#1E1E1E",
                fontFamily: "montMedium",
              }}
            >
              Female
            </Text>
          </View>
        </View>
      </View>
    </View>
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
    marginTop: "8%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    display: "flex",
    width: "85%",
    alignItems: "flex-start",
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
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  circle: {
    width: 24,
    height: 24,
    borderColor: "#CF56A1",
    borderWidth: 2,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15%",
  },
  circleFill: {
    width: 12,
    height: 12,
    backgroundColor: "#CF56A1",
    borderRadius: 10,
  },
});

export default EditGender;
