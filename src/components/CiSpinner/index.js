import React from 'react'
import { ActivityIndicator } from 'react-native'

import { COLORS } from '~/styles'

export function CiSpinner(props) {
  const { style = {}, size = 50, color = COLORS.DARK_BLUE } = props

  return <ActivityIndicator color={color} size={size} style={style} />
}
