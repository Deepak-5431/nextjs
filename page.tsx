"use client"
import { useState } from 'react'
import { TodoObject } from '@/models/Todo';
import {v4 as uuid} from 'uuid';

const Home:React.FC = () => {
  const[todo,setTodo] = useState<string>('');
  const[todos,setTodos] = useState<TodoObject[]>([]);
  
  const addTodo = () =>{
   setTodos([{id:uuid(),value:todo,done:false},...todos ])
   setTodo("");
  }

  const markdone = (id: string) =>  {
   setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done}:todo));
  }

  return (
  <>
  <header className='bg-slate-600 p-4'>
   <h1 className='text-3xl'>Todos</h1>
  </header>
  <main className='p-4'>
    <input
    type='text'
    placeholder='Search for anime'
    className='p-4 rounded mr-5 text-black'
    onChange={(e)=>setTodo(e.target.value)}
    value={todo}
    />
    <button className='border-2 p-4 rounded  '
    onClick={()=>addTodo()}
    >
    enter
    </button>
    <ul className='mt-5'>
      {
        todos.map(todo =>
          <li
          onClick={() =>markdone(todo.id)} 
          className={`text-3xl cursor-pointer ml-5 ${todo.done ? 'line-through':'no-underline'}`}>{todo.value}</li>
          )
         
      }
      
    </ul>
    </main>
  </>
  )
}

export default Home;