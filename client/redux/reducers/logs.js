import axios from 'axios'

const GET_LOGS = 'GET_LOGS'

const initialState = {
  list: [],
  logs: []
}

export default (state = initialState, action) => {
  if (action.type.indexOf('@@') !== 0) {
    axios.post('/api/v1/logs', action)
  }
  switch (action.type) {
    case GET_LOGS: {
      return { ...state, logs: action.logs }
    }
    default:
      return {
        ...state,
        list: [...state.list, action]
      }
  }
}

export function getLogs() {
  return (dispatch) => {
    axios('/api/v1/logs').then(({ data }) => dispatch({ type: GET_LOGS, logs: data }))
  }
}
