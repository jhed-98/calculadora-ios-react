import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/themes/appTheme'

export const App = () => {
  return (
    <SafeAreaView style={ styles.fondo }>
      <StatusBar 
        backgroundColor="black"
        barStyle='light-content'
      />
        <CalculadoraScreen />
    </SafeAreaView>
  )
}

 