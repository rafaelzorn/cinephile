import { Images } from '~/assets'

export function getImageApi(path, source = 'uri', width = 'w500') {
  return path
    ? { [source]: `https://image.tmdb.org/t/p/${width}/${path}` }
    : Images.notFound
}
