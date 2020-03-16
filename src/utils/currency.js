import { GENERAL } from '~/constants'

export function convertToDolar(value) {
  return (
    `$${value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` ||
    GENERAL.UNIFORMED
  )
}
