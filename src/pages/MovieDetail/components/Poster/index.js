import React from 'react'

import { ROUTE_NAME } from '~/constants'
import { Images, Rating } from '~/utils'

import { ImagesModal } from './components'
import {
  Container,
  Image,
  ButtonPlay,
  IconPlay,
  ContainerInfoMovie,
  ContainerInfo,
  MovieTitle,
  ContainerRating,
  IconStar,
} from './styles'

export function Poster(props) {
  const {
    title,
    backdropPath,
    voteAverage,
    images,
    video,
    showImage,
    onPress,
    navigate,
  } = props

  function handlePlayVideo() {
    const { key } = video

    navigate(ROUTE_NAME.MOVIE_TRAILER, { key })
  }

  function renderButtonPlay() {
    if (video && video.site === 'YouTube') {
      return (
        <ButtonPlay onPress={() => handlePlayVideo()}>
          <IconPlay name='play-arrow' />
        </ButtonPlay>
      )
    }

    return null
  }

  function renderImagesModal() {
    if (!images.length) {
      return null
    }

    return (
      <ImagesModal images={images} showImage={showImage} onClose={onPress} />
    )
  }

  return (
    <Container>
      <Image resizeMode='cover' source={Images.getImageApi(backdropPath)} />
      {renderButtonPlay()}

      <ContainerInfoMovie
        activeOpacity={images.length ? 0.5 : 1}
        onPress={images.length ? onPress : null}
      >
        <ContainerInfo>
          <MovieTitle numberOfLines={2}>{title}</MovieTitle>
          <ContainerRating>
            {Rating.getAvarageRating(voteAverage).map(value => (
              <IconStar key={value} name='star' />
            ))}
          </ContainerRating>
        </ContainerInfo>
      </ContainerInfoMovie>

      {renderImagesModal()}
    </Container>
  )
}
