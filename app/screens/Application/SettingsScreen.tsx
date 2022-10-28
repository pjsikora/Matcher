import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

const user = {
  email: "bartlomiej.wydrzycki@gmail.com",
  location: "Kielce, Poland",
  searchFor: "Woman",
  locationPreference: 35,
  agePreference: 35,
  genderPreference: "Female",
};

interface SettingsScreenProps {
  navigation: any;
}
const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const [distanceValue, setDistanceValue] = useState(user.locationPreference);
  const [ageValue, setAgeValue] = useState(user.agePreference);

  return (
    <View style={styles.allContains}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            navigation.openDrawer();
            setDistanceValue(user.locationPreference);
          }}
        >
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <Text style={styles.categoryText}>Account Settings</Text>
        <TouchableOpacity
          style={styles.buttonContainerWBottom}
          onPress={() => {
            navigation.navigate("editEmail");
          }}
        >
          <Text style={styles.titleButtonText}>Change your e-mail</Text>
          <Image
            style={styles.icon}
            source={require("../../images/editArrow.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("editPassword");
          }}
        >
          <Text style={styles.titleButtonText}>Change your password</Text>
          <Image
            style={styles.icon}
            source={require("../../images/editArrow.png")}
          />
        </TouchableOpacity>
        {/* Location section */}
        <Text style={styles.categoryText}>Location Settings</Text>
        <TouchableOpacity
          style={styles.buttonContainerWBottom}
          onPress={() => {
            navigation.navigate("editLocation");
          }}
        >
          <Text style={styles.titleButtonText}>Set your Location</Text>
          <Image
            style={styles.icon}
            source={require("../../images/editArrow.png")}
          />
        </TouchableOpacity>

        {/* Distance slider */}
        <View style={styles.buttonContainerColumn}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.titleButtonText}>Distance Preference </Text>
            <Text style={{ marginLeft: "auto" }}>{distanceValue}km</Text>
          </View>
          <Slider
            style={{ width: "90%", height: 40 }}
            minimumValue={0}
            maximumValue={200}
            value={user.locationPreference}
            onValueChange={(distance) => {
              distance = Math.ceil(distance);
              setDistanceValue(distance);
            }}
            minimumTrackTintColor="#CF56A1"
            maximumTrackTintColor="#1E1E1E"
          />
        </View>

        {/* Age slider */}
        <Text style={styles.categoryText}>Age & Gender Preferences</Text>
        <View style={styles.buttonContainerColumn}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.titleButtonText}>Age Preference </Text>
            <Text style={{ marginLeft: "auto" }}>18-{ageValue}</Text>
          </View>
          <Slider
            style={{ width: "90%", height: 40 }}
            minimumValue={18}
            maximumValue={100}
            value={user.agePreference}
            onValueChange={(age) => {
              age = Math.ceil(age);
              setAgeValue(age);
            }}
            minimumTrackTintColor="#CF56A1"
            maximumTrackTintColor="#1E1E1E"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("editGenderPreference");
          }}
        >
          <Text style={styles.titleButtonText}>Gender preferences</Text>
          <Image
            style={styles.icon}
            source={require("../../images/editArrow.png")}
          />
        </TouchableOpacity>

        <Text style={styles.categoryText}>Contact Us </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("support");
          }}
        >
          <Text style={styles.titleButtonText}>Help & Support</Text>
          <Image
            style={styles.icon}
            source={require("../../images/editArrow.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
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
  container: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  headerContainer: {
    width: "85%",
    height: 70,
    display: "flex",
    marginTop: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  categoryText: {
    fontSize: 16,
    color: "#ABABAB",
    fontFamily: "montSBold",
    width: "100%",
    marginBottom: "5%",
    marginTop: "5%",
  },
  buttonsContainer: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ABABAB",
    // marginTop: "5%",
    // marginBottom: "7%",
  },
  buttonContainerColumn: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ABABAB",
    // marginTop: "5%",
    // marginBottom: "7%",
  },
  buttonContainerWBottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#ABABAB",
    // marginTop: "5%",
    // marginBottom: "7%",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "montMedium",
    color: "#CF56A1",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
  titleButtonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontFamily: "montMedium",
    marginTop: "5%",
    marginBottom: "5%",
  },
  deleteButtonText: {
    fontSize: 16,
    color: "#CF56A1",
    fontFamily: "montSBold",
    marginTop: "5%",
  },
});

export default SettingsScreen;
