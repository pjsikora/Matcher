import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MatchesScreen = () => {
  const location = "Kielce, Poland";

  const users = [
    {
      id: "id1",
      name: "Jakub",
      photo: require("../../images/users/zdj1.jpg"),
      age: 24,
      location: "Kielce",
      distance: 2,
    },
    {
      id: "id2",
      name: "Patryk",
      photo: require("../../images/users/zdj2.jpg"),
      age: 18,
      location: "Kielce",
      distance: 2,
    },
    {
      id: "id3",
      name: "Stanisław",
      photo: require("../../images/users/zdj3.jpg"),
      age: 22,
      location: "Kielce",
      distance: 2,
    },
    {
      id: "id4",
      name: "Kasztan",
      photo: require("../../images/users/zdj4.jpg"),
      age: 23,
      location: "Kielce",
      distance: 2,
    },
    {
      id: "id5",
      name: "Zuzia",
      photo: require("../../images/users/zdj5.jpg"),
      age: 19,
      location: "Kielce",
      distance: 2,
    },
    {
      id: "id6",
      name: "Agnieszka",
      photo: require("../../images/users/zdj6.png"),
      age: 20,
      location: "Kielce",
      distance: 2,
    },
  ];

  const usersList = users.map((user) => {
    return (
      <View key={user.id} style={styles.item}>
        <ImageBackground
          source={user.photo}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
          imageStyle={{ borderRadius: 18 }}
        >
          <Text
            style={{
              marginLeft: 10,
              fontSize: 22,
              color: "#FFF",
              fontFamily: "montBold",
            }}
          >{`${user.name}, ${user.age}`}</Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{ fontSize: 11, color: "#FFF", fontFamily: "montRegular" }}
            >
              {user.location}
            </Text>
            <Image source={require("../../images/locationPin.png")} />
            <Text>{user.distance}km</Text>
          </View>
        </ImageBackground>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.iconTextContainer}>
          <Image
            style={styles.locationIcon}
            source={require("../../images/purpleArrowDown.png")}
          />
          <Text style={styles.arrowText}>Location</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image
            style={styles.locationIcon}
            source={require("../../images/positionPin.png")}
          />
          <Text style={styles.pinText}>{location}</Text>
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../../images/searchIcon.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#ABABAB"
        />
      </View>
      <View style={{ marginTop: "2%", width: "80%" }}>
        <Text
          style={{ fontSize: 24, color: "#1E1E1E", fontFamily: "montMedium" }}
        >
          Your Matches{" "}
          <Text
            style={{
              fontSize: 24,
              color: "#CF56A1",
              fontFamily: "montBold",
            }}
          >
            6
          </Text>
        </Text>
      </View>
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        style={styles.matchedContainer}
        contentContainerStyle={styles.matchedContainerAlign}
      >
        {usersList}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  locationContainer: {
    height: 100,
    marginTop: 70,
    width: "80%",
    display: "flex",
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "3%",
  },
  locationIcon: {
    marginRight: 5,
    marginTop: "2%",
  },
  arrowText: {
    fontSize: 16,
    fontFamily: "montMedium",
  },
  pinText: {
    fontSize: 20,
    fontFamily: "montSBold",
    color: "#AD439C",
    marginTop: "1.6%",
  },
  searchBarContainer: {
    width: "80%",
    marginTop: "1%",
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
    height: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "7%",
  },
  searchIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  searchInput: {
    width: "80%",
    height: 30,
    fontFamily: "montMedium",
    fontSize: 14,
  },
  matchedContainer: {
    width: "90%",
    minHeight: "10%",
    maxHeight: "70%",
    marginTop: "5%",
  },
  matchedContainerAlign: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  item: {
    width: "45%",
    height: 180,
    marginBottom: "5%",
    borderRadius: 18,
  },
});

export default MatchesScreen;
