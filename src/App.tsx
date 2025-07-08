import React from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from './navigation/Navigation'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="black" />
      <Navigation />
    </View>
  )
}

export default App