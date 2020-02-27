import { GENERAL } from '~/constants'
import { Genres } from '~/data'

function getGenreById(id) {
  return Genres.find(genre => genre.id === id)
}

export function getGenresById(ids) {
  if (ids.length > 1) {
    return `${getGenreById(ids[0]).name}, ${getGenreById(ids[1]).name}`
  }

  return ids.length !== 0 ? `${getGenreById(ids[0]).name}` : GENERAL.UNIFORMED
}
