import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from '~/styles'

import { Container, StyledText, Button, ButtonText } from './styles'

export function CiNotification(props) {
  const {
    text = 'Something wrong has happened, please try again later.',
    icon = 'report-problem',
    textButton = 'Try Again',
    onPress = false,
  } = props

  function renderButton() {
    return (
      onPress && (
        <Button onPress={onPress}>
          <ButtonText>{textButton}</ButtonText>
        </Button>
      )
    )
  }

  return (
    <Container>
      <Icon color={COLORS.DARK_BLUE} name={icon} size={72} />
      <StyledText>{text}</StyledText>
      {renderButton()}
    </Container>
  )
}
