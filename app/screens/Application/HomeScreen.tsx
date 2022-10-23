import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  const location = "Kielce, Poland";

  const users = [
    {
      id: "id1",
      name: "Ilona",
      photo: require("../../images/users/user1.png"),
    },
    {
      id: "id2",
      name: "Wiktoria",
      photo: require("../../images/users/user2.png"),
    },
    {
      id: "id3",
      name: "Magda",
      photo: require("../../images/users/user3.png"),
    },
    {
      id: "id4",
      name: "Julia",
      photo: require("../../images/users/user4.png"),
    },
    {
      id: "id5",
      name: "Zuzia",
      photo: require("../../images/users/user5.png"),
    },
    {
      id: "id6",
      name: "Agnieszka",
      photo: require("../../images/users/user6.png"),
    },
  ];

  const usersList = users.map((user) => {
    return (
      <View style={styles.matchedItemContainer} key={user.id}>
        <View style={styles.matchedItem}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={user.photo}
          />
        </View>
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

      <Text style={styles.text}>Recently Matched</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.matchedContainer}
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
    // backgroundColor: "red",
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
    marginTop: "5%",
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
    height: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "10%",
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
  text: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "montMedium",
    width: "80%",
  },
  matchedContainer: {
    minWidth: "100%",
    height: 50,
    marginTop: "5%",
    flexDirection: "row",
  },
  matchedItemContainer: {
    padding: 1,
    borderWidth: 2,
    borderColor: "#CF56A1",
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  matchedItem: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#333",
    overflow: "hidden",
  },
});

export default HomeScreen;
