import React from 'react'
import { WebView } from 'react-native-webview'

import { Loading } from './styles'

export function MovieTrailer({ navigation, route }) {
  const { key } = route.params

  function loading() {
    return <Loading />
  }

  return (
    <WebView
      startInLoadingState
      renderLoading={loading}
      source={{ uri: `https://www.youtube.com/embed/${key}?start=0` }}
    />
  )
}
