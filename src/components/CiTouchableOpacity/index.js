import React from 'react'
import { TouchableOpacity } from 'react-native'

export function CiTouchableOpacity(props) {
  const { activeOpacity = 0.5, style = {}, onPress, children } = props

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={style}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}
