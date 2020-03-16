export function convertToUpperCaseFirstLetter(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : ''
}
