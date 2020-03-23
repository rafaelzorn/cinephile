import { GENERAL } from '~/constants'

export function convertToYear(date) {
  return new Date(date).getFullYear() || GENERAL.UNIFORMED
}

export function convertToDate(date) {
  const newDate = new Date(date)

  let day = newDate.getDate() + 1
  day = day >= 10 ? day : `0${day}`

  let month = newDate.getMonth() + 1
  month = month >= 10 ? month : `0${month}`

  return `${day}/${month}/${newDate.getFullYear()}` || GENERAL.UNIFORMED
}

export function currentDate() {
  return new Date().toISOString().slice(0, 10)
}

export function getAge(birthday) {
  if (!birthday) {
    return `${GENERAL.UNIFORMED} age`
  }

  const today = new Date()
  const birthDate = new Date(birthday)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age -= 1
  return `${age} years`
}
