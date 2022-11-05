import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface MessageScreenProps {
  route: any;
  navigation: any;
}
const MessageScreen = ({ route, navigation }: MessageScreenProps) => {
  const user = route.params.user;
  const [enteredMessage, setEnteredMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 0,
      desc: "Hi!",
      isStranger: true,
    },
    {
      id: 2,
      desc: "Hello!",
      isStranger: false,
    },
    {
      id: 3,
      desc: "How are u?",
      isStranger: true,
    },
    {
      id: 4,
      desc: "Good, and u?",
      isStranger: false,
    },
    {
      id: 5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ratione necessitatibus incidunt quas fuga? Minus deserunt dicta soluta molestiae atque.",
      isStranger: true,
    },
    {
      id: 6,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ratione necessitatibus incidunt quas fuga? Minus deserunt dicta soluta molestiae atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ratione necessitatibus incidunt quas fuga? Minus deserunt dicta soluta molestiae atque.",
      isStranger: false,
    },
  ]);
  const messagesList = messages.map((item) => {
    return (
      <View style={styles.messageContainer} key={item.id}>
        {item.isStranger && (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={user.photo}
                style={{ width: "100%", height: "100%", borderRadius: 80 }}
              />
            </View>
            <View style={styles.strangerMessage}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFF",
                  fontFamily: "montMedium",
                }}
              >
                {item.desc}
              </Text>
            </View>
          </>
        )}
        {!item.isStranger && (
          <View style={styles.myMessage}>
            <Text
              style={{
                fontSize: 16,
                color: "#FFF",
                fontFamily: "montMedium",
              }}
            >
              {item.desc}
            </Text>
          </View>
        )}
      </View>
    );
  });

  const sendMessage = () => {
    Keyboard.dismiss();
    const enteredObject = {
      id: Math.random(),
      desc: enteredMessage,
      isStranger: false,
    };
    setMessages((current) => [...current, enteredObject]);
    setEnteredMessage("");
  };
  const scrollViewRef = useRef();
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.header, styles.shadowProp]}>
          <View style={styles.headerContainer}>
            <View style={styles.headerItem}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image source={require("../../images/backIcon.png")} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "#1E1E1E",
                  fontFamily: "montSBold",
                }}
              >
                {user.name}
              </Text>
            </View>
            <View style={styles.headerItem}>
              <Image source={require("../../images/moreBtn.png")} />
            </View>
          </View>
        </View>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            {messagesList}
          </TouchableWithoutFeedback>
        </ScrollView>
        <KeyboardAvoidingView style={styles.footer} behavior="position">
          <View style={styles.inputContainer}>
            <Image source={require("../../images/emojiBtn.png")} />
            <TextInput
              style={styles.input}
              placeholder="Send your message"
              placeholderTextColor="#ABABAB"
              onChangeText={(text) => setEnteredMessage(text)}
              value={enteredMessage}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Image source={require("../../images/sendBtn.png")} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    minHeight: "13%",
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "flex-end",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  headerItem: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    width: "85%",
    maxHeight: "80%",
  },
  footer: {
    height: "10%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFF",
    height: "100%",
    borderTopWidth: 1,
    borderColor: "#ABABAB",
  },
  input: { width: "65%", height: "95%" },
  messageContainer: {
    width: "100%",
    minHeight: 20,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 80,
    backgroundColor: "#FFF",
    overflow: "hidden",
    padding: 1,
    borderWidth: 2,
    borderColor: "#CF56A1",
  },
  strangerMessage: {
    marginLeft: 10,
    backgroundColor: "#CF56A1",
    maxWidth: 200,
    padding: 10,
    borderRadius: 10,
  },
  myMessage: {
    marginLeft: "auto",
    backgroundColor: "#C1C1C1",
    maxWidth: 200,
    padding: 10,
    borderRadius: 10,
  },
});

export default MessageScreen;
