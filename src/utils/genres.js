import { GENERAL } from '~/constants'
import { Genres } from '~/data'

import { Array } from './'

function getGenreById(id) {
  return Genres.find(genre => genre.id === id)
}

export function getGenresById(ids) {
  if (ids.length > 1) {
    return `${getGenreById(ids[0]).name}, ${getGenreById(ids[1]).name}`
  }

  return ids.length !== 0 ? `${getGenreById(ids[0]).name}` : GENERAL.UNIFORMED
}

export function convertToGenres(genres) {
  let itens = Array.sliceArrayLength(genres, 2)

  if (!itens) {
    return GENERAL.UNIFORMED
  }

  if (genres.length === 1) {
    itens = genres[0].name
  } else if (genres.length > 1) {
    itens = `${genres[0].name}, ${genres[1].name}`
  }

  return itens
}
