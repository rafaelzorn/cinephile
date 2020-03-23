import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'

import './config/ReactotronConfig'

import Routes from './routes'
import { store, persistor } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
