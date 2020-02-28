import React from 'react'

import { ROUTE_NAME, TYPE_REQUEST } from '~/constants'
import { Genres } from '~/data'

import { InputSearch } from './components'
import { Container, ListGenres, ButtonGenre, ButtonGenreText } from './styles'

export function Search({ navigation }) {
  const { navigate } = navigation

  function handleSearch(genre) {
    navigate(ROUTE_NAME.SEARCH_RESULT, {
      typeRequest: TYPE_REQUEST.DISCOVER,
      name: genre.name,
      id: genre.id,
    })
  }

  return (
    <Container>
      <InputSearch navigate={navigate} />

      <ListGenres>
        {Object.values(Genres).map(genre => (
          <ButtonGenre key={genre.id} onPress={() => handleSearch(genre)}>
            <ButtonGenreText>{genre.name}</ButtonGenreText>
          </ButtonGenre>
        ))}
      </ListGenres>
    </Container>
  )
}
