import { GENERAL } from '~/constants'

export function convertToYear(date) {
  return new Date(date).getFullYear() || GENERAL.UNIFORMED
}

export function currentDate() {
  return new Date().toISOString().slice(0, 10)
}
