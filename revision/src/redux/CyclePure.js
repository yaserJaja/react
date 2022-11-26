import React from "react"
import { createStore } from "redux"

const CyclePure = () => {
  // Actions:
  const increment = () => {
    return {
      type: 'INC',
      payload: 1
    }
  }
  const decrement = () => {
    return {
      type: 'DEC',
      payload: 1
    }
  }
  // Reducer:
  const counter = (state = 0, action) => {
    switch(action.type) {
      case 'INC': 
        return state + action.payload 
      case 'DEC': 
        return state - action.payload 
      default:
        return state
    }
  }
  // Store:
  const store = createStore(counter)
  store.subscribe(() => {
    console.log(store.getState());
    document.getElementById('state').innerHTML = 'State: ' + store.getState();
  })

  return (
    <>
      <h1 
        id="state" 
        className="text-center mt-5"
      >
        State: {store.getState()}
      </h1>

      <div className="text-center mt-5">
        
        <button 
          className="me-2"
          onClick={() => store.dispatch(increment())}
        >Increment
        </button>

        <button 
          className=""
          onClick={() => store.dispatch(decrement())}
        >Decrement
        </button>

      </div>
    </>
  )
}

export default CyclePure