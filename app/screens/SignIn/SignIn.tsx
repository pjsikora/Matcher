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
import WelcomeLogoLogin from '../../components/WelcomeScreen/WelcomeLogoLogin'
import { validators } from '../../validators/validators'
import { loginCall } from '../../controllers/loginController'
import { useDispatch, useSelector } from 'react-redux'

interface EmailScreenProps {
  navigation: any
}

const SignInScreen = ({ navigation }: EmailScreenProps) => {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const state = useSelector((state: any) => state.registerData)
  const dipatch = useDispatch()

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

  useEffect(() => {
    let isMounted = true

    isMounted && setLoading(state.pending)

    return () => {
      isMounted = false
    }
  }, [state.pending])

  const navigate = (screen: string) => {
    navigation.navigate(screen, { email })
  }

  const loginHandler = async () => {
    const result = await loginCall(
      {
        email: email.toLowerCase(),
        userPassword: password,
      },
      navigate,
      dipatch
    )
    if (result.success) {
      navigation.navigate('appContainer')
    } else {
      setError(result.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
        <LinearGradient
          colors={['#AD439C', '#FAAEBE']}
          style={styles.linearGradient}
        >
          <WelcomeLogoLogin isWelcomeScreen={false} navigation={navigation} />

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
          <SignInButton
            isDisabled={isDisabled}
            loginHandler={loginHandler}
            isLoading={loading}
          />
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
    height: '100%',
    width: '100%',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
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
