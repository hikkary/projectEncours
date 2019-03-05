import {
  DISPLAY_DATA,
  CHARACTERS_LOADING,
  DISPLAY_ERROR_HARRY
} from '../actions/harry'

const initialState = {
  characters: [],
  isLoading: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_DATA:
      return { ...state, characters: action.payload }
    case CHARACTERS_LOADING:
      return { ...state, isLoading: action.payload }
    case DISPLAY_ERROR_HARRY:
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}
