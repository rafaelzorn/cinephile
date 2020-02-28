import React from 'react'
import { TouchableOpacity } from 'react-native'

export function CiTouchableOpacity(props) {
  const { onPress, children, activeOpacity = 0.5, style = {} } = props

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
