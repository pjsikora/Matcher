import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RegisterUserData } from '../../types/types'

interface RegisterButtonProps {
  toScreen: string
  navigation: any
  isDisabled: boolean
  callback?: () => void
}
const RegisterButton = ({
  isDisabled,
  toScreen,
  navigation,
  callback,
}: RegisterButtonProps) => {
  const pressedHandler = () => {
    if (!callback) navigation.navigate(toScreen)
    else callback()
  }
  return (
    <TouchableOpacity
      onPress={() => pressedHandler()}
      style={isDisabled ? styles.disabledBtn : styles.btn}
      disabled={isDisabled ? true : false}
    >
      <LinearGradient
        colors={['#F5A3BA', '#CF56A1']}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.btnTitle}>Continue</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C04D9F',
    borderRadius: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    marginBottom: 50,
  },
  disabledBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C04D9F',
    borderRadius: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    marginBottom: 50,
    opacity: 0.5,
  },
  btnTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'montMedium',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: '100%',
    width: '100%',
  },
})
export default RegisterButton
