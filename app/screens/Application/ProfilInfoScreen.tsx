import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ProfilInfoScreenProps {
  route: any;
  navigation: any;
}
const ProfileInfoScreen = ({ route, navigation }: ProfilInfoScreenProps) => {
  const user = route.params.user;
  const hobbies = user.hobbies;
  console.log(hobbies);

  const hobbiesList = hobbies.map((hobby) => {
    return (
      <View style={styles.chosenHobbyItem} key={hobby.id}>
        <Text style={styles.chosenHobbyText} key={hobby.id}>
          {hobby}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "45%" }}>
        <ImageBackground source={user.photo} style={styles.photo}>
          <View style={{ position: "absolute", top: 50, left: 20 }}>
            <TouchableOpacity
              style={styles.backIconContainer}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={require("../../images/whiteBackIcon.png")} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.20)",
              flexDirection: "row",
              maxHeight: "40%",
            }}
          >
            <View style={{ width: "80%", flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 40,
                  color: "#FFF",
                  fontFamily: "montBold",
                  marginLeft: "5%",
                  marginTop: 15,
                }}
              >{`${user.name}, ${user.age}`}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFF",
                    fontFamily: "montRegular",
                    marginLeft: "5%",
                  }}
                >{`${user.location}`}</Text>
                <Image
                  source={require("../../images/biggerLocationPin.png")}
                  style={{ marginLeft: 14, marginRight: 6 }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFF",
                    fontFamily: "montRegular",
                  }}
                >{`${user.distance}km`}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.messageBtnContainer}>
              <View
                style={{
                  height: 64,
                  width: 64,
                  backgroundColor: "#FFF",
                  borderRadius: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../images/bottomTabNav/messagesFocused.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.aboutMeContainer}>
        <Text
          style={{
            fontSize: 16,
            color: "#1E1E1E",
            fontFamily: "montSBold",
            marginBottom: 15,
          }}
        >
          About me
        </Text>
        <Text
          style={{ fontSize: 16, color: "#1E1E1E", fontFamily: "montRegular" }}
        >
          {user.desc}
        </Text>
      </View>
      <View style={styles.hobbiesContainer}>
        <Text
          style={{ fontSize: 16, color: "#1E1E1E", fontFamily: "montSBold" }}
        >
          Hobbies
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 15,
          }}
        >
          {hobbiesList}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.warn("Deleting match");
          }}
        >
          <Text
            style={{ fontSize: 20, color: "#FFF", fontFamily: "montMedium" }}
          >
            Delete Match
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backIconContainer: {
    marginRight: "auto",
    marginTop: "15%",
    marginLeft: "5%",
    marginBottom: "2%",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messageBtnContainer: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutMeContainer: {
    width: "85%",
    height: "18%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  hobbiesContainer: {
    width: "85%",
    height: "25%",
  },
  chosenHobbyText: {
    color: "#CB54A0",
    fontFamily: "montMedium",
  },
  chosenHobbyItem: {
    backgroundColor: "#F2F2F2",
    height: 40,
    padding: "3%",
    borderWidth: 1,
    borderColor: "#CB54A0",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%",
    marginRight: "4%",
  },
  buttonContainer: {
    width: "85%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 237,
    height: 50,
    backgroundColor: "#CF56A1",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileInfoScreen;
