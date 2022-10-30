import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

const user = {
  gender: "Male",
};

const hobbies = [
  { id: "0", name: "Music", isChosen: false },
  { id: "1", name: "Art", isChosen: false },
  { id: "2", name: "Cooking", isChosen: false },
  { id: "3", name: "Fishing", isChosen: false },
  { id: "4", name: "Baking", isChosen: false },
  { id: "5", name: "Walking", isChosen: false },
  { id: "6", name: "Outdoors", isChosen: false },
  { id: "7", name: "Photography", isChosen: false },
  { id: "8", name: "Travel", isChosen: false },
  { id: "9", name: "Movies", isChosen: false },
  { id: "10", name: "Working out", isChosen: false },
  { id: "11", name: "Yoga", isChosen: false },
  { id: "12", name: "Swimming", isChosen: false },
  { id: "13", name: "Instagram", isChosen: false },
  { id: "14", name: "Foodie", isChosen: false },
  { id: "15", name: "Astrology", isChosen: false },
  { id: "16", name: "Dancing", isChosen: false },
  { id: "17", name: "Board Games", isChosen: false },
  { id: "18", name: "Fasion", isChosen: false },
  { id: "19", name: "Cycling", isChosen: false },
  { id: "20", name: "Dog lover", isChosen: false },
  { id: "21", name: "Cat lover", isChosen: false },
  { id: "22", name: "Netflix", isChosen: false },
  { id: "23", name: "Politics", isChosen: false },
  { id: "24", name: "Volunteering", isChosen: false },
  { id: "25", name: "Wine", isChosen: false },
  { id: "26", name: "Craft Beer", isChosen: false },
  { id: "27", name: "History", isChosen: false },
  { id: "28", name: "Geography", isChosen: false },
  { id: "29", name: "Cars", isChosen: false },
  { id: "30", name: "Camping", isChosen: false },
  { id: "31", name: "Biology", isChosen: false },
  { id: "32", name: "Soccer", isChosen: false },
  { id: "33", name: "Psychology", isChosen: false },
  { id: "34", name: "Anime", isChosen: false },
  { id: "35", name: "DIY", isChosen: false },
];

interface EditHobbiesProps {
  route: any;
  navigation: any;
}
const EditHobbies = ({ route, navigation }: EditHobbiesProps) => {
  const [gender, setGender] = useState(user.gender);
  const [restart, setRestart] = useState(false);
  const [chosenHobbies, setChosenHobbies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterBySearch = (item) => {
    if (item.name.includes(searchText)) {
      return true;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   console.log(route.params.hobbies);
  // }, []);

  const filteredHobbies = hobbies.filter(filterBySearch);

  const hobbiesList = filteredHobbies.map((hobby) => {
    return (
      <TouchableOpacity
        style={hobby.isChosen ? styles.chosenHobbyItem : styles.hobbyItem}
        key={hobby.id}
        onPress={() => {
          hobby.isChosen = !hobby.isChosen;
          setChosenHobbies(hobbies.filter((hoby) => hoby.isChosen === true));
          setRestart(!restart);
          console.log(chosenHobbies);
        }}
      >
        <Text
          style={hobby.isChosen ? styles.chosenHobbyText : styles.hobbyText}
          key={hobby.id}
        >
          {hobby.name}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.allContains}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Hobby</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("edit");
          }}
        >
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../../images/searchIcon.png")}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#ABABAB"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.hobbiesContainer}>{hobbiesList}</View>
        </ScrollView>
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
    marginTop: "10%",
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
  searchBarContainer: {
    width: "80%",
    marginTop: "5%",
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
  scroll: {
    width: "80%",
    minHeight: "40%",
  },
  hobbiesContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "2%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },

  hobbyText: {
    color: "#ABABAB",
    fontFamily: "montMedium",
  },
  chosenHobbyText: {
    color: "#CB54A0",
    fontFamily: "montMedium",
  },
  hobbyItem: {
    backgroundColor: "#F2F2F2",
    padding: "3%",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%",
    marginRight: "4%",
  },
  chosenHobbyItem: {
    backgroundColor: "#F2F2F2",
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
});

export default EditHobbies;
