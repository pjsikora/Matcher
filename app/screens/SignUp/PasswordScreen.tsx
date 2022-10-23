import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import RegisterButton from '../../components/UI/RegisterButton'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/registerSlice'
import BackButton from '../../components/UI/BackButton'
import { validators } from '../../validators/validators'

interface PasswordScreenProp {
  navigation: any
}
const PasswordScreen = ({ navigation }: PasswordScreenProp) => {
  const dispatch = useDispatch()

  const [isDisabled, setIsDisabled] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const [isPasswordSecured, setIsPasswordSecured] = useState(true)

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      if (validators.strongPassword.test(password)) {
        if (confirmPassword && password && confirmPassword === password) {
          setError('')
          dispatch(addItem({ value: 'password', data: password }))
          setIsDisabled(false)
        } else {
          setError('Passwords are not the same')
          setIsDisabled(true)
        }
      } else {
        setError('Password must be strong')
      }
    }

    return () => {
      isMounted = false
    }
  }, [password, confirmPassword])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#AD439C', '#FAAEBE']}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <BackButton navigation={navigation} />
            <Text style={styles.title}>Your Password is...</Text>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require('../../images/lockIcon.png')}
              />
              <TextInput
                secureTextEntry={isPasswordSecured}
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholder='Enter your password'
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
                      ? require('../../images/eyeIcon.png')
                      : require('../../images/eyeSlashIcon.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.icon}
                source={require('../../images/lockIcon.png')}
              />
              <TextInput
                secureTextEntry={isPasswordSecured}
                style={styles.input}
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
                value={confirmPassword}
                placeholder='Confirm your password'
                placeholderTextColor='#ABABAB'
              />
            </View>
            <Text style={styles.error}>{password && error}</Text>
            <RegisterButton
              isDisabled={isDisabled}
              toScreen='nameInput'
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
  textInputContainer: {
    width: '80%',
    backgroundColor: '#F7F7F7',
    height: '9%',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '4%',
    marginTop: '5%',
  },
  input: {
    width: '80%',
    height: '100%',
    color: '#ABABAB',
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 1,
    lineHeight: 25,
    fontFamily: 'montRegular',
  },
  icon: {
    marginTop: '5%',
    marginRight: '5%',
  },
  iconRight: {
    marginTop: '5%',
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
  btn: {},
  bcgHearths: {
    position: 'absolute',
    top: '60%',
    zIndex: -1,
  },
  error: {
    color: 'red',
    marginTop: '2%',
    marginBottom: '10%',
    height: 22,
  },
})
export default PasswordScreen
