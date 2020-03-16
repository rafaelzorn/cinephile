import React from 'react'
import { Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

import { CiSpinner } from '~/components'
import { COLORS } from '~/styles'

export function ImagesModal(props) {
  const { showImage, images, onClose } = props

  return (
    <Modal transparent visible={showImage} onRequestClose={onClose}>
      <ImageViewer
        enableImageZoom
        enablePreload
        enableSwipeDown
        flipThreshold={10}
        imageUrls={images}
        loadingRender={() => <CiSpinner color={COLORS.WHITE} />}
        maxOverflow={5}
        pageAnimateTime={200}
        saveToLocalByLongPress={false}
        swipeDownThreshold={25}
        onCancel={onClose}
      />
    </Modal>
  )
}
