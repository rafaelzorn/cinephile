import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import './config/ReactotronConfig'

import Routes from './routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#a9a9a9' barStyle='dark-content' />
      <Routes />
    </NavigationContainer>
  )
}
