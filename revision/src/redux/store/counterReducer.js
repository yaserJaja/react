const inistialState = {
  count: 0
}
const counterReducer = (state = inistialState, action) => {
  switch(action.type) {
    case 'INC': 
      return { count: state.count + action.payload } 
    case 'DEC': 
    return { count: state.count - action.payload }
    default:
      return state
  }
}

export default counterReducer