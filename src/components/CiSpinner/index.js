import React from 'react'
import { ActivityIndicator } from 'react-native'

import { COLORS } from '~/styles'

export function CiSpinner(props) {
  const { size = 50, color = COLORS.DARK_BLUE, style = {} } = props

  return <ActivityIndicator color={color} size={size} style={style} />
}
