import React, { useEffect, useState } from 'react'

import { CiModal, CiNotification } from '~/components'
import api from '~/services/api'
import { Transform, Images, Dates } from '~/utils'

import {
  Container,
  Spinner,
  StyledScrollView,
  ContainerInformation,
  StyledImage,
  Informations,
  InvolvedName,
  StyledText,
  TitleBiography,
  TextBiography,
  ContainerButton,
  CloseButton,
  StyledIcon,
} from './styles'

export function InvolvedModal(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [involved, setInvoled] = useState({})

  const { isVisible, involvedId, style, onClose } = props

  async function getInvolved() {
    try {
      setIsLoading(true)

      const response = await api.get(`person/${involvedId}`)

      setIsLoading(false)
      setIsError(false)
      setInvoled(response.data)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    getInvolved()
  }, [involvedId])

  function renderInvolved() {
    if (isLoading || Object.entries(involved).length === 0) {
      return <Spinner />
    }

    if (isError) {
      return (
        <StyledScrollView>
          <CiNotification
            icon='report-problem'
            text='Something wrong has happened, please try again later.'
            textButton='Try Again'
            onPress={getInvolved}
          />
        </StyledScrollView>
      )
    }

    const {
      profilePath,
      name,
      knownForDepartment,
      birthday,
      placeOfBirth,
      biography,
    } = Transform.involved(involved)

    return (
      <>
        <StyledScrollView>
          <ContainerInformation>
            <StyledImage source={Images.getImageApi(profilePath)} />
            <Informations>
              <InvolvedName>{name}</InvolvedName>
              <StyledText numberOfLines={2}>{knownForDepartment}</StyledText>
              <StyledText numberOfLines={2}>
                {Dates.getAge(birthday)}
              </StyledText>
              <StyledText numberOfLines={2}>{placeOfBirth}</StyledText>
            </Informations>
          </ContainerInformation>
          <TitleBiography>Biography</TitleBiography>
          <TextBiography>{biography}</TextBiography>
        </StyledScrollView>
        <ContainerButton>
          <CloseButton onPress={onClose}>
            <StyledIcon name='keyboard-arrow-down' size={20} />
          </CloseButton>
        </ContainerButton>
      </>
    )
  }

  return (
    <CiModal isVisible={isVisible} style={style} onClose={onClose}>
      <Container>{renderInvolved()}</Container>
    </CiModal>
  )
}
