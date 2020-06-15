import axios from 'axios'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  if (action.type.indexOf('@@') !== 0) {
    axios.post('/api/v1/logs', action)
  }
  return {
    ...state,
    list: [...state.list, action]
  }
}
