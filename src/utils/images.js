import { Images } from '~/assets'

import { Array } from './'

export function getImageApi(path, source = 'uri', width = 'w500') {
  return path
    ? { [source]: `https://image.tmdb.org/t/p/${width}/${path}` }
    : Images.notFound
}

export function formatImageUrl(images) {
  return Array.sliceArrayLength(images, 15).map(item =>
    getImageApi(item.file_path, 'url', 'original')
  )
}
