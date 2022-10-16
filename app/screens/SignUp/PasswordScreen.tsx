import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import RegisterButton from '../../components/UI/RegisterButton'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUserData } from '../../types/types'
import { addPassword } from '../../redux/registerSlice'

interface PasswordScreenProp {
  navigation: any
}
const PasswordScreen = ({ navigation }: PasswordScreenProp) => {
  const dispatch = useDispatch()
  const count = useSelector((state: RegisterUserData) => state)

  const emailHandler = (password: string) => {
    dispatch(addPassword(password))
    console.log(count)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#AD439C', '#FAAEBE']}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Your Password is...</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(newText) => emailHandler(newText)}
              ///value={text}
              placeholder='Enter your password'
            />
            <TextInput
              style={styles.input}
              onChangeText={(newText) => emailHandler(newText)}
              ///value={text}
              placeholder='Confirm your password'
            />
          </View>
          <RegisterButton toScreen='nameInput' navigation={navigation} />
        </View>
      </LinearGradient>
    </View>
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
    height: '64%',
    width: '100%',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    marginTop: '15%',
  },
  btnTitle: {
    fontSize: 20,
    marginTop: '15%',
  },
  input: {
    backgroundColor: '#F7F7F7',
    width: '100%',
    marginBottom: '5%',
    height: '50%',
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
})
export default PasswordScreen
