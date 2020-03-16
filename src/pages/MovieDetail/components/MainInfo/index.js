import React from 'react'

import { Section } from '../'
import { Container, Description } from './styles'

export function MainInfo(props) {
  const { data } = props

  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {Object.keys(data).map(key => (
        <Section hasSubTitle key={key} title={key}>
          <Description>{data[key]}</Description>
        </Section>
      ))}
    </Container>
  )
}
