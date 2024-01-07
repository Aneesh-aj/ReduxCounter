import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './Redux/slice'

function App() {

  const counter = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
       <div style={{display:'flex',gap:19,marginBottom:'13px'}} >
          <button onClick={()=>dispatch(increment())}  >increament</button>
          <div>{counter}</div>
          <button  onClick={()=>dispatch(decrement())} >decreament</button>
       </div>
       <div>
          <button  onClick={()=>dispatch(reset())} >Reset</button>
       </div>
    </>
  )
}

export default App
