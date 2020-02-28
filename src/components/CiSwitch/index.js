import React from 'react'
import { Switch } from 'react-native'

import { COLORS } from '~/styles'

export function CiSwitch(props) {
  const {
    value,
    onValueChange,
    trackColor = { false: COLORS.GRAY, true: COLORS.DARK_BLUE },
  } = props

  return (
    <Switch
      trackColor={trackColor}
      value={value}
      onValueChange={onValueChange}
    />
  )
}
