import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface RegisterButtonProps {
  isDisabled: boolean
  loginHandler: () => void
  isLoading: boolean
}
const SignInButton = ({
  isDisabled,
  loginHandler,
  isLoading,
}: RegisterButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => loginHandler()}
      disabled={isDisabled}
      style={isDisabled ? styles.disabledBtn : styles.btn}
    >
      <Text style={styles.btnTitle}>{isLoading ? 'Loading...' : 'Log In'}</Text>
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
  icon: {},
})
export default SignInButton
