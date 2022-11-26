import {GET_PRODUCTS} from '../actions/products-actions'
import {ADD_PRODUCT} from '../actions/products-actions'

export const productsReducer = (state = [], action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return [...action.payload]
    case ADD_PRODUCT: 
      return [...state, action.payload]
    default:
      return state
  }
}