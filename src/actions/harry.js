import axios from 'axios'

export const DISPLAY_DATA = 'DISPLAY_DATA'
export const CHARACTERS_LOADING = 'CHARACTERS_LOADING'
export const DISPLAY_ERROR_HARRY = 'DISPLAY_ERROR_HARRY'

export const getCharacters = () => dispatch => {
  dispatch(isLoading(true))
  axios
    .get('http://hp-api.herokuapp.com/api/characters')
    .then(res => {
      console.log(res)
      dispatch(displayData(res.data))
      dispatch(isLoading(false))
    })
    .catch(err => {
      dispatch(isLoading(false))
      dispatch(displayErrorHarry(err.message))
      console.log(err)
    })
}

export const displayErrorHarry = payload => ({
  type: 'DISPLAY_ERROR_HARRY',
  payload
})

export const displayData = payload => ({
  type: 'DISPLAY_DATA',
  payload
})

export const isLoading = payload => ({
  type: 'CHARACTERS_LOADING',
  payload
})
