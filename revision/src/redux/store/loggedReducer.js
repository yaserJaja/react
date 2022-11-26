const inistialState = {
  logged: false
}
const loggedReducer = (state = inistialState, action) => {
  switch(action.type) {
    case 'IN': 
      return { logged: true } 
    case 'DEC': 
    return { logged: false }
    default:
      return state
  }
}

export default loggedReducer