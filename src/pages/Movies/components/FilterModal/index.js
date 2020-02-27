import React from 'react'
import { Text } from 'react-native'

import { Container, Modal } from './styles'

export function FilterModal(props) {
  const { isVisible, onClose } = props

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Container>
        <Text>Modal</Text>
      </Container>
    </Modal>
  )
}
