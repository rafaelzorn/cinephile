import React from 'react'

import { INVOLVED_TYPE, GENERAL } from '~/constants'
import { Images } from '~/utils'

import {
  Container,
  Title,
  StyledImage,
  ContainerProducer,
  ProducerImage,
} from './styles'

export function Involved(props) {
  const { involved, onPress, type } = props

  function getInvolvedName() {
    if (type === INVOLVED_TYPE.CHARACTER) {
      return involved.character || GENERAL.UNIFORMED
    }

    if (type === INVOLVED_TYPE.PRODUCTION_TEAM) {
      return involved.job || GENERAL.UNIFORMED
    }

    return null
  }

  function renderTeam() {
    if (
      type !== INVOLVED_TYPE.PRODUCTION_TEAM &&
      type !== INVOLVED_TYPE.CHARACTER
    ) {
      return null
    }

    return (
      <Container onPress={() => onPress(involved.id)}>
        <Title fontWeight='bold' numberOfLines={1}>
          {getInvolvedName()}
        </Title>
        <StyledImage source={Images.getImageApi(involved.profile_path)} />
        <Title fontWeight='normal' numberOfLines={2}>
          {involved.name || GENERAL.UNIFORMED}
        </Title>
      </Container>
    )
  }

  function renderProduction() {
    if (type !== INVOLVED_TYPE.PRODUCER) {
      return null
    }

    return (
      <ContainerProducer>
        <ProducerImage
          resizeMode='contain'
          source={Images.getImageApi(involved.logo_path)}
        />

        <Title fontWeight='normal' numberOfLines={2}>
          {involved.name || GENERAL.UNIFORMED}
        </Title>
      </ContainerProducer>
    )
  }

  return (
    <>
      {renderTeam()}
      {renderProduction()}
    </>
  )
}
