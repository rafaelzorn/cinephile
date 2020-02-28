import ACTION_TYPES from './actionsTypes'

export function setConfiguration(params = {}) {
  const { hasAdultContent } = params

  return {
    type: ACTION_TYPES.SET_CONFIGURATION,
    payload: { hasAdultContent },
  }
}
