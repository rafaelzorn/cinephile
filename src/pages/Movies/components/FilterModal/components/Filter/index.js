import React from 'react'

import { CiSwitch } from '~/components'

import { Container, Title } from './styles'

export function Filter(props) {
  const { title, type, selected, onValueChange } = props

  return (
    <Container>
      <Title numberOfLines={2}>{title}</Title>
      <CiSwitch
        value={type === selected}
        onValueChange={() => onValueChange(type, title)}
      />
    </Container>
  )
}
