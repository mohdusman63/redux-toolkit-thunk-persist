import { decrement, increment ,incrementByAmount} from '../store/reducer/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import {useState,useEffect} from 'react'
import {getUsers} from '../store/action/userAction'

const Home=()=>{
	const dispatch = useDispatch()
	const state=useSelector(state=>state)
    const user=state.counter.user
    console.log(user)
	const [value,setValue]=useState(0)
	console.log(state)
    useEffect(()=>{
        dispatch(getUsers())
        //dispatch(getUser(1))
    },[])
	return(
        <>
        <div>
         <h1>hellow</h1>
         {state.counter.value}
          <button onClick={()=>dispatch(increment())}>Increament</button>
          {value}

          <input type="number" onChange={(e)=>setValue(e.target.value)}/>
           <button onClick={()=>dispatch(incrementByAmount(parseInt(value)))}>Increament</button>
           {JSON.stringify(user)}

        </div>
        </>

		)
}
export default Home