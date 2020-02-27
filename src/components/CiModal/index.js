import React from 'react'
import Modal from 'react-native-modal'

export function CiModal(props) {
  const { isVisible, onClose, children, style = {} } = props

  return (
    <Modal
      hideModalContentWhileAnimating
      useNativeDriver
      backdropOpacity={0.5}
      isVisible={isVisible}
      style={style}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      {children}
    </Modal>
  )
}
