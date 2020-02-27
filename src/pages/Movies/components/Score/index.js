import React from 'react'

import { COLORS } from '~/styles'

import { Container, ScoreText } from './styles'

export function Score(props) {
  const { score } = props

  function colorScore() {
    let color = COLORS.LIGHT_GREEN

    if (score < 5) {
      color = COLORS.LIGHT_RED
    } else if (score >= 5 && score < 7) {
      color = COLORS.LIGHT_YELLOW
    }

    return color
  }

  return (
    <Container color={colorScore}>
      <ScoreText>{score}</ScoreText>
    </Container>
  )
}
