export const DISPOSIT_MONEY = 'DISPOSIT_MONEY'
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY'

export const disposit = (amount) => {
  return {
    type: DISPOSIT_MONEY,
    payload: amount,
  }
}
export const withdraw = (amount) => {
  return {
    type: WITHDRAW_MONEY,
    payload: amount,
  }
}