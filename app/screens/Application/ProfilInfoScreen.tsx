import { Text, View, StyleSheet, Image } from "react-native";
import BackButton from "../../components/UI/BackButton";

interface ProfilInfoScreenProps {
  route: any;
  navigation: any;
}
const ProfileInfoScreen = ({ route, navigation }: ProfilInfoScreenProps) => {
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text>{user.name}</Text>
      <Text>Chuj w dupe</Text>
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
});

export default ProfileInfoScreen;
