import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import RegisterButton from '../../components/UI/RegisterButton'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/registerSlice'
import BackButton from '../../components/UI/BackButton'

interface EmailScreenProps {
  navigation: any
}
const AboutYourselfScreen = ({ navigation }: EmailScreenProps) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [desc, setDesc] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      if (desc.trim()) {
        setIsDisabled(false)
        dispatch(addItem({ value: 'desc', data: desc }))
      } else {
        setIsDisabled(true)
      }
    }

    return () => {
      isMounted = false
    }
  }, [desc])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#AD439C', '#FAAEBE']}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <BackButton navigation={navigation} />
            <Text style={styles.title}>Tell more about yourself...</Text>
            <TextInput
              multiline={true}
              numberOfLines={6}
              style={styles.input}
              onChangeText={(desc) => setDesc(desc)}
              value={desc}
              placeholder='About me'
              placeholderTextColor='#ABABAB'
            />
            <RegisterButton
              isDisabled={isDisabled}
              toScreen='hobbyInput'
              navigation={navigation}
            />
          </View>
          <Image
            style={styles.bcgHearths}
            source={require('../../images/Hearts.png')}
          />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  whiteContainer: {
    backgroundColor: '#FFFFFF',
    minHeight: '64%',
    width: '100%',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 55,
    marginBottom: '5%',
    width: '80%',
    fontFamily: 'montSBold',
  },
  input: {
    width: '80%',
    backgroundColor: '#F7F7F7',
    height: 120,
    marginTop: '10%',
    marginBottom: '15%',
    fontSize: 16,
    fontFamily: 'montRegular',
  },
  bcgHearths: {
    position: 'absolute',
    top: '60%',
    zIndex: -1,
  },
})
export default AboutYourselfScreen
