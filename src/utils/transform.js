import { GENERAL } from '~/constants'
import { Languages } from '~/data'

import { Array, Times, Dates, Currency, Images, Genres } from './'

export function movie(data) {
  return {
    title: data.title || '',
    backdropPath: data.backdrop_path || '',
    video: data.videos.results[0] || [],
    overview: data.overview || GENERAL.UNIFORMED,
    images: Images.formatImageUrl(data.images.backdrops),
    voteAverage: data.vote_average || 0,
    cast: Array.sliceArrayLength(data.credits.cast, 15),
    crew: Array.sliceArrayLength(data.credits.crew, 15),
    productionCompanies: Array.sliceArrayLength(data.production_companies, 10),
    infosDetail: {
      Duration: Times.convertMinsToHrsMins(data.runtime),
      Genre: Genres.convertToGenres(data.genres),
      Language: Languages[data.original_language],
      Release: Dates.convertToDate(data.release_date),
      Budget: Currency.convertToDolar(data.budget),
      Revenue: Currency.convertToDolar(data.revenue),
      Adult: GENERAL.ADULT_RATE[data.adult] || GENERAL.UNIFORMED,
    },
  }
}

export function involved(data) {
  return {
    profilePath: data.profile_path || '',
    name: data.name || `${GENERAL.UNIFORMED} name`,
    knownForDepartment:
      data.known_for_department || `${GENERAL.UNIFORMED} department`,
    birthday: data.birthday || '',
    placeOfBirth: data.place_of_birth || `${GENERAL.UNIFORMED} place of birth`,
    biography: data.biography || GENERAL.UNIFORMED,
  }
}
