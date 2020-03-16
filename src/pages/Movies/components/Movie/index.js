import React from 'react'
import { View } from 'react-native'

import { ROUTE_NAME } from '~/constants'
import { Languages } from '~/data'
import { Images, Dates, Genres } from '~/utils'

import { Score } from '../'
import {
  Container,
  StyledImage,
  ContainerInformation,
  Title,
  ContainerSubtitle,
  SmalText,
} from './styles'

export function Movie(props) {
  const { movie, navigate } = props

  return (
    <Container
      onPress={() =>
        navigate(ROUTE_NAME.MOVIE_DETAIL, { id: movie.id, title: movie.title })
      }
    >
      <StyledImage source={Images.getImageApi(movie.poster_path)} />
      <ContainerInformation>
        <View>
          <Title numberOfLines={2}>{movie.title}</Title>
          <ContainerSubtitle>
            <SmalText>
              {Dates.convertToYear(movie.release_date)} |{' '}
              {Languages[movie.original_language]}
            </SmalText>
          </ContainerSubtitle>
          <SmalText numberOfLines={1}>
            {Genres.getGenresById(movie.genre_ids)}
          </SmalText>
        </View>

        <Score score={movie.vote_average} />
      </ContainerInformation>
    </Container>
  )
}
