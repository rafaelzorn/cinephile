import React from 'react'

import { String } from '~/utils'

import { Container, Title } from './styles'

export function Section(props) {
  const { title, isLast, hasSubTitle, children } = props

  return (
    <Container hasSubTitle={hasSubTitle} isLast={isLast}>
      <Title>{String.convertToUpperCaseFirstLetter(title)}</Title>
      {children}
    </Container>
  )
}
