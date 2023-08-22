import React from 'react'
import { Todo } from '../model/Model'
interface todos{
    Todos:Array<Todo>,
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<todos> = ({Todos, setTodos}) => {
  return (
    <div className=''>
       {
        Todos?.map((item)=>(
          <div className='w-[500px] h-[50px] bg-red-300 rounded-xl flex items-center px-2 text-2xl mb-3' key={item.id}>
             <p>{item.todo}</p>
          </div>
        ))
       }
    </div>
  )
}

export default TodoList