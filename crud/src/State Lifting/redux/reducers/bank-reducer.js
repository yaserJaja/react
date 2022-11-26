import { DISPOSIT_MONEY, WITHDRAW_MONEY } from "../actions/bank-actions"

export const bankReducer = (state = 1000, action) => {
  switch(action.type) {
    case DISPOSIT_MONEY: 
      return state + action.payload
    case WITHDRAW_MONEY: 
      return state - action.payload
    default: 
      return state
  }
}