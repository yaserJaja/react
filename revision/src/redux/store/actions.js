const increment = (num) => {
  return {
    type: 'INC',
    payload: num ? num : 1
  }
}
const decrement = (num) => {
  return {
    type: 'DEC',
    payload: num ? num : 1
  }
}
const login = () => {
  return {
    type: 'IN'
  }
}
const logout = () => {
  return {
    type: 'OUT'
  }
}
export {increment, decrement, login, logout}