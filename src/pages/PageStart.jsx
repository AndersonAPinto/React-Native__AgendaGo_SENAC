import React from 'react'
import { StyleSheet, Text } from 'react-native';

export default function PageStart() {
  return (
    <Text style={styles.container}> Pagina Inicio</Text>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContente: 'center',
        alignItems: 'center'
    }
})


