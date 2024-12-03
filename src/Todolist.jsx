import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './Todoslice.jsx'
import './App.css'

const Todolist = () => {
 
const dispatch=useDispatch();
const todos=useSelector(state=>state.todo.todos);


  return (
   <>
   <ul>
    {todos.map((item)=>(
        <li>
            <h2>{item.text}</h2>
            <button onClick={()=>dispatch(removeTodo(item.id))}>X</button>

        </li>
    ))}
   </ul>

   </>
  )
}

export default Todolist