import ACTION_TYPES from './actionsTypes'

const INITIAL_STATE = {
  hasAdultContent: false,
}

export default function configuration(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_CONFIGURATION: {
      const { hasAdultContent } = action.payload

      return {
        ...state,
        hasAdultContent,
      }
    }
    default:
      return state
  }
}
