import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ResetPassword(){
  return (
    <View>
      <Text style={styles.container}>Reset</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})

