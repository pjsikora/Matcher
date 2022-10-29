import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EditInfoAddPhotoTiles from '../../components/UI/EditInfoAddPhotoTile'
import { useEffect, useState } from 'react'
import { userSlice } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserCall } from '../../controllers/userController'

const user = {
  description: 'Wronka to pedał',
  gender: 'Female',
  hobbies: 'Travel, DIY, Computer Progra...',
}

interface EditInfoScreenProps {
  navigation: any
}
const EditInfoScreen = ({ navigation }: EditInfoScreenProps) => {
  const [expanded, setExpanded] = useState(true)
  const handlePress = () => setExpanded(!expanded)

  const state = useSelector((state: any) => state.userData)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  console.log(state)
  useEffect(() => {
    console.log('Hi')
    let isMounted = true

    isMounted &&
      setUserData({
        desc: state.user.desc,
        gender: state.user.gender,
      })
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [userData])

  const showAlert = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure do you want to save your changes?',
      [
        {
          text: 'No',
          onPress: () => {
            navigation.goBack()
            navigation.openDrawer()
          },
          style: 'cancel',
        },
        {
          text: 'Ues',
          onPress: () => {
            updateHandler()
          },
        },
      ]
    )
  }
  const updateHandler = async () => {
    console.log(state)
    const result = await updateUserCall(state.accessToken, userData, dispatch)

    if (result.success) {
      navigation.goBack()
      navigation.openDrawer()
    }
    console.log(result)
  }
  return (
    userData && (
      <View style={styles.allContains}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Edit info</Text>
          <TouchableOpacity
            onPress={() => {
              showAlert()
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.imagesContainer}>
              <Text style={styles.categoryText}>Images</Text>
              <EditInfoAddPhotoTiles />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.categoryText}>Description</Text>
              <TextInput
                multiline={true}
                numberOfLines={6}
                style={styles.input}
                placeholder='About me'
                placeholderTextColor='#ABABAB'
                onChangeText={(desc) => setUserData({ ...userData, desc })}
                value={userData.desc}
              />
              <TouchableOpacity
                style={{
                  width: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.genderContainer}>
                <Text style={styles.categoryText}>Gender</Text>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    navigation.navigate('editGender', {
                      gender: userData.gender,
                      setUserData,
                    })
                  }}
                >
                  <Text style={styles.buttonText}>{userData.gender}</Text>
                  <Image
                    style={styles.icon}
                    source={require('../../images/editArrow.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.genderContainer}>
                <Text style={styles.categoryText}>Hobbies</Text>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    navigation.navigate('editHobbies')
                  }}
                >
                  <Text style={styles.buttonText}>{user.hobbies}</Text>
                  <Image
                    style={styles.icon}
                    source={require('../../images/editArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  )
}

export default EditInfoScreen

const styles = StyleSheet.create({
  allContains: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerContainer: {
    width: '85%',
    height: 70,
    display: 'flex',
    marginTop: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 34,
    fontFamily: 'montSBold',
    color: '#1E1E1E',
  },
  done: {
    fontSize: 20,
    color: '#CF56A1',
    fontFamily: 'montSBold',
  },
  imagesContainer: {
    display: 'flex',
    width: '90%',
    height: '40%',
    marginTop: '2%',
    // marginBottom: "2%",
  },
  categoryText: {
    fontSize: 16,
    color: '#ABABAB',
    fontFamily: 'montSBold',
    width: '100%',
  },
  descriptionContainer: {
    display: 'flex',
    width: '90%',
    height: '15%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  input: {
    width: '80%',
    height: '60%',
    backgroundColor: '#F2F2F2',
    marginTop: '15%',
    borderRadius: 10,
    padding: 10,
  },
  editText: {
    fontSize: 16,
    color: '#CF56A1',
    fontFamily: 'montSBold',

    marginLeft: 'auto',
  },
  genderContainer: {
    width: '90%',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ABABAB',
    marginTop: '5%',
    marginBottom: '7%',
  },
  icon: {
    marginLeft: 'auto',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'montMedium',
    color: '#CF56A1',
    marginTop: 20,
    marginBottom: 20,
  },
})
