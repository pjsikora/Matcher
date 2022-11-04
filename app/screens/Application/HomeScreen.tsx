import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  const location = "Kielce, Poland";

  const users = [
    {
      id: "id1",
      name: "Ilona",
      photo: require("../../images/users/user1.png"),
      age: 25,
    },
    {
      id: "id2",
      name: "Wiktoria",
      photo: require("../../images/users/user2.png"),
      age: 18,
    },
    {
      id: "id3",
      name: "Magda",
      photo: require("../../images/users/user3.png"),
      age: 22,
    },
    {
      id: "id4",
      name: "Julia",
      photo: require("../../images/users/user4.png"),
      age: 23,
    },
    {
      id: "id5",
      name: "Zuzia",
      photo: require("../../images/users/user5.png"),
      age: 19,
    },
    {
      id: "id6",
      name: "Agnieszka",
      photo: require("../../images/users/user6.png"),
      age: 20,
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

      <Text style={styles.text}>Recently Matched</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.matchedContainer}
      >
        {usersList}
      </ScrollView>
      <View style={styles.nearbyContainer}>
        <Text style={styles.text2}>Near You</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userNearYou}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 14,
              position: "absolute",
            }}
            source={require("../../images/users/bigUser.png")}
          />
          <View style={styles.nearbyUserInfo}>
            <Text
              style={{
                fontFamily: "montBold",
                color: "#FFF",
                fontSize: 24,
                width: "100%",
              }}
            >
              Mia, 25
            </Text>
            <Text
              style={{
                fontFamily: "montRegular",
                color: "#FFF",
                fontSize: 13,
                width: "50%",
              }}
            >
              Kielce, Poland
            </Text>
            <Text
              style={{
                fontFamily: "montRegular",
                color: "#FFF",
                fontSize: 13,
                width: "50%",
              }}
            >
              8km
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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

  text: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "montMedium",
    width: "80%",
  },
  text2: {
    color: "#1E1E1E",
    fontSize: 18,
    fontFamily: "montMedium",
    width: "75%",
    marginTop: "1.5%",
  },
  matchedContainer: {
    minWidth: "100%",
    marginTop: "5%",
    flexDirection: "row",
    maxHeight: 100,
    // marginBottom: 5,
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
    // height: "100%",
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#333",
    overflow: "hidden",
  },
  viewAllButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "montMedium",
  },
  viewAllButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CF56A1",
    width: "25%",
    height: 33,
    flexGrow: 0,
    borderRadius: 10,
  },
  nearbyContainer: {
    width: "80%",
    height: "55%",
    marginTop: "10%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  userNearYou: {
    marginTop: "20%",
    width: "90%",
    height: "75%",
    borderRadius: 18,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#CB54A0",
  },
  nearbyUserInfo: {
    position: "relative",
    top: "70%",
    left: 0,
    width: "100%",
    height: "30%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 5,
  },
});

export default HomeScreen;
