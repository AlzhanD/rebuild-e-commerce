const ADD_TO_SELECTION = 'ADD_TO_SELECTION'
const REMOVE_FROM_SECTION = 'REMOVE_FROM_SECTION'
const UPDATE_SORT_TYPE = 'UPDATE_SORT_TYPE'
const GET_PRODUCTS = '@@GET_PRODUCTS'
const GET_RATES = '@@GET_RATES'
const SET_BASE = 'SET_BASE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_SEARCH = '@@SET_SEARCH'
const initialState = {
  list: [],
  selection: {},
  rates: {},
  base: 'EUR',
  sortType: 'a-z',
  currentPage: 1,
  find: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, list: action.list }
    }
    case GET_RATES: {
      return { ...state, rates: action.rates.rates }
    }
    case SET_SEARCH: {
      return { ...state, find: action.find }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.Page }
    }
    case SET_BASE: {
      return { ...state, base: action.base }
    }
    case UPDATE_SORT_TYPE: {
      return { ...state, sortType: action.sortType }
    }
    case ADD_TO_SELECTION: {
      const updateSelection = {
        ...state.selection,
        [action.id]: (state.selection[action.id] || 0) + 1
      }
      if (updateSelection[action.id] >= 11) {
        return { ...state }
      }
      return {
        ...state,
        selection: updateSelection
      }
    }
    case REMOVE_FROM_SECTION: {
      const newSelection = {
        ...state.selection,
        [action.id]: (state.selection[action.id] || 0) - 1
      }
      if (newSelection[action.id] <= 0) {
        delete newSelection[action.id]
      }
      return {
        ...state,
        selection: newSelection
      }
    }
    default:
      return state
  }
}

export const sortByType = (types) => {
  return { type: UPDATE_SORT_TYPE, sortType: types }
}
export const searchProducts = (find) => {
  return { type: SET_SEARCH, find }
}

export const sortPage = (Page) => {
  return { type: SET_CURRENT_PAGE, Page }
}

export function addSelection(id) {
  return { type: ADD_TO_SELECTION, id }
}

export function removeSelection(id) {
  return { type: REMOVE_FROM_SECTION, id }
}

export function setBase(base) {
  return { type: SET_BASE, base }
}

export function getProducts() {
  return (dispatch) => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((list) => {
        dispatch({ type: GET_PRODUCTS, list })
      })
  }
}

export function getRates() {
  return (dispatch) => {
    fetch('/api/v1/rates')
      .then((res) => res.json())
      .then((rates) => {
        dispatch({ type: GET_RATES, rates })
      })
  }
}
