import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

import { CiModal, CiSpinner, CiNotification } from '~/components'
import api from '~/services/api'
import { Transform } from '~/utils'

import { Container } from './styles'

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
      return <CiSpinner />
    }

    if (isError) {
      return (
        <CiNotification
          icon='report-problem'
          text='Something wrong has happened, please try again later.'
          textButton='Try Again'
          onPress={getInvolved}
        />
      )
    }

    const { name } = Transform.involved(involved)

    return <Text>{name}</Text>
  }

  return (
    <CiModal isVisible={isVisible} style={style} onClose={onClose}>
      <Container>{renderInvolved()}</Container>
    </CiModal>
  )
}
