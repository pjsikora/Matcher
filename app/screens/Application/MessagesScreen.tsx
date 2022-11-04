import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Navigation from "../../navigation";
import userSlice from "../../redux/userSlice";

const messages = [
  {
    id: 1,
    name: "Jakub Wrona",
    photo: require("../../images/users/zdj1.jpg"),
    lastMessage: "Ej szczerze",
  },
  {
    id: 2,
    name: "Jakub Wojnowski",
    photo: require("../../images/users/zdj6.jpg"),
    lastMessage: "Jebać C#",
  },
  {
    id: 3,
    name: "Albert Wychowaniec",
    photo: require("../../images/users/zdj7.jpg"),
    lastMessage: "Kurwa jeden mecz nie wszedł",
  },
  {
    id: 4,
    name: "Patryk Romper",
    photo: require("../../images/users/zdj4.jpg"),
    lastMessage: "Siema",
  },
  {
    id: 5,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 6,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 7,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 8,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 9,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 10,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 11,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 12,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 13,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 14,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
  {
    id: 15,
    name: "Test",
    photo: require("../../images/users/test.jpg"),
    lastMessage: "Test",
  },
];

interface MessagesScreenProps {
  navigation: any;
}
const MessagesScreen = ({ navigation }: MessagesScreenProps) => {
  const location = "Kielce, Poland";
  const [searchText, setSearchText] = useState("");

  const filterBySearch = (item) => {
    if (item.name.includes(searchText)) {
      return true;
    } else {
      return false;
    }
  };

  const filteredMessages = messages.filter(filterBySearch);

  const messagesList = filteredMessages.map((item) => {
    return (
      <TouchableOpacity
        style={styles.messageItemContainer}
        key={item.id}
        onPress={() => {
          navigation.navigate("message", {
            user: item,
          });
        }}
      >
        <View style={styles.photoContainer}>
          <View style={styles.photoBorder}>
            <Image source={item.photo} style={styles.photo} />
          </View>
        </View>
        <View style={styles.descContainer}>
          <Text
            style={{
              fontSize: 20,
              color: "#1E1E1E",
              fontFamily: "montSBold",
              marginBottom: 5,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{ fontSize: 15, color: "#ABABAB", fontFamily: "montMedium" }}
          >
            {item.lastMessage}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
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
      <View style={styles.messagesContainer}>
        <Text
          style={{ fontSize: 18, color: "#1E1E1E", fontFamily: "montMedium" }}
        >
          Messages
        </Text>
        {filteredMessages.length !== 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.messagesScroll}
          >
            {messagesList}
          </ScrollView>
        ) : (
          <Text
            style={{
              fontSize: 14,
              color: "#1E1E1E",
              fontFamily: "montMedium",
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Messages not found
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
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

  searchBarContainer: {
    width: "80%",
    marginTop: "20%",
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
    height: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "8%",
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
  messagesContainer: {
    width: "80%",
  },
  messagesScroll: {
    marginTop: 15,
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
  },
  messageItemContainer: {
    width: "100%",
    height: 80,
    marginBottom: "1%",
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  photoContainer: {
    height: "100%",
    width: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photoBorder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "#FFF",
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "#CF56A1",
    overflow: "hidden",
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  descContainer: {
    height: "100%",
    width: "70%",
    marginLeft: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default MessagesScreen;
