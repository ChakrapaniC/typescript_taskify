import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './model/Model';
import TodoList from './components/TodoList';

function App() {
  const [todo, settodo] = useState<string>('');
  const [Todos, setTodos] = useState<Array<Todo>>([])

  const addTodo = (e:React.FormEvent) =>{
    console.log(todo)
    e.preventDefault();
    if(todo){
      setTodos([...Todos,{id: Date.now(), todo:todo, isDone:false}]);
      settodo('');
      console.log(Todos)
    }
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-7'>
        <div className='text-[30px] mt-4'>Taskify</div>
        <InputField todo={todo} settodo={settodo} addTodo={addTodo}/>
        <TodoList Todos={Todos} setTodos={setTodos}/>
      </div>
    </>
  );
}

export default App;
