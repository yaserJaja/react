import { useDispatch, useSelector } from "react-redux"
import {increment, decrement} from './store/actions'

const CycleReact = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.count)
  const logged = useSelector(state => state.loggen.logged)

  return (
    <>
      <h1 
        id="state" 
        className="text-center mt-5"
      >
        State: {counter}
      </h1>

      <div className="text-center mt-5">
        
        <button 
          className="me-2"
          onClick={() => {dispatch(increment())}}
        >+
        </button>

        <button 
          className="me-2"
          onClick={() => {dispatch(increment(3))}}
        >+3
        </button>

        <button 
          className=""
          onClick={() => {dispatch(decrement())}}
        >-
        </button>
        <hr />
      </div>
      <div className="text-center mt-5">
        
        <button 
          className="me-2"
          onClick={() => {dispatch(increment())}}
        >LOGIN
        </button>

        <button 
          className=""
          onClick={() => {dispatch(decrement())}}
        >LOGOUT
        </button>
        <hr />
      </div>
    </>
  )
}

export default CycleReact