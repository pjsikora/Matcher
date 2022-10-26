import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EditInfoAddPhotoTiles from "../../components/UI/EditInfoAddPhotoTile";

interface EditInfoScreenProps {
  navigation: any;
}
const EditInfoScreen = ({ navigation }: EditInfoScreenProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Edit info</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              navigation.openDrawer();
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imagesContainer}>
          <Text style={styles.categoryText}>Images</Text>
          <EditInfoAddPhotoTiles />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditInfoScreen;

const styles = StyleSheet.create({
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
    height: "7%",
    marginTop: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
  imagesContainer: {
    display: "flex",
    width: "85%",
    height: "45%",
    marginTop: "2%",
  },
  categoryText: {
    fontSize: 16,
    color: "#ABABAB",
    fontFamily: "montSBold",
    height: "5%",
  },
});
