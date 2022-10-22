import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import SignInButton from '../../components/UI/SignInButton'
import WelcomeLogo from '../../components/WelcomeScreen/WelcomeLogo'
import { validators } from '../../validators/validators'
import BackButton from '../../components/UI/BackButton'
import { loginCall } from '../../controllers/loginController'

interface EmailScreenProps {
  navigation: any
}

const SignInScreen = ({ navigation }: EmailScreenProps) => {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      if (validators.email.test(email) && password.length > 0) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }

    return () => {
      isMounted = false
    }
  }, [email, password])

  const navigate = (screen: string) => {
    navigation.navigate(screen, { email })
  }
  const loginHandler = async () => {
    const result = await loginCall(
      {
        email: email.toLowerCase(),
        userPassword: password,
      },
      navigate
    )

    if (result) {
      Alert.alert('Login', 'Tu bedzie przekierowanie bo udało sie zalogowac', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])
    }

    if (result) {
      setError(result)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
        <LinearGradient
          colors={['#AD439C', '#FAAEBE']}
          style={styles.linearGradient}
        >
          <WelcomeLogo isWelcomeScreen={false} navigation={navigation} />

          <View style={styles.inputsContainer}>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require('../../images/pinkEmailIcon.png')}
              />
              <TextInput
                style={styles.input}
                // autoFocus={true}
                onChangeText={(email) => setEmail(email)}
                placeholder='Email'
                placeholderTextColor='#ABABAB'
              />
            </View>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require('../../images/pinkLockIcon.png')}
              />
              <TextInput
                secureTextEntry={isPasswordSecured}
                style={styles.input}
                onChangeText={(newPassword) => setPassword(newPassword)}
                placeholder='Password'
                placeholderTextColor='#ABABAB'
              />
              <TouchableOpacity
                style={styles.iconRight}
                onPress={() => {
                  setIsPasswordSecured(!isPasswordSecured)
                }}
              >
                <Image
                  source={
                    isPasswordSecured
                      ? require('../../images/pinkEyeIcon.png')
                      : require('../../images/eyeSlashIcon.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.error}>{error && error} </Text>
          </View>
          <SignInButton isDisabled={isDisabled} loginHandler={loginHandler} />
          <Image
            style={styles.bcgHearths}
            source={require('../../images/Hearts.png')}
          />
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    minHeight: '100%',
    width: '100%',
  },
  title: {
    fontSize: 55,
    marginTop: '5%',
    marginBottom: '5%',
    width: '80%',
  },
  btnTitle: {
    fontSize: 20,
    marginTop: '15%',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  textInputContainer: {
    width: '80%',
    backgroundColor: '#F7F7F7',
    height: 70,
    padding: 10,
    marginBottom: '5%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    height: '100%',
    color: '#ABABAB',
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 1,
    lineHeight: 25,
    fontSize: 18,
    fontFamily: 'montRegular',
  },
  icon: {
    marginTop: '5%',
    marginRight: '5%',
  },
  iconRight: {
    marginTop: '6%',
    marginLeft: '4%',
  },
  inputContainer: {
    display: 'flex',
    width: '90%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  error: {
    marginBottom: '2%',
    color: 'red',
  },
  btn: {},
  bcgHearths: {
    position: 'absolute',
    top: '60%',
    zIndex: -1,
  },
})

export default SignInScreen
