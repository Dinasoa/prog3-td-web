import React, { useState } from 'react';
import './App.css';
import { InputsField } from './components/InputsField';
import { TodoList } from './components/TodoList';
import { Todo } from './model';
import '../src/style/style.css'
import { isDocument } from '@testing-library/user-event/dist/utils';

const App: React.FC = () => {
  const [todo , setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todo);
  
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos , {id: todos.length , todo , isDone:false}])
      setTodo("");
    }
  }

  const changeStatusTodone = (_todo:Todo) => {
    const index = todos.findIndex(todo => todo.id === _todo.id)
    const temp = [...todos]
    temp[index] = {..._todo, isDone: true}
    setTodos([...temp])
  }

  const changeStatusTodo = (_todo:Todo) => {
    const index = todos.findIndex(todo => todo.id === _todo.id)
    const temp = [...todos]
    temp[index] = {..._todo, isDone: false}
    setTodos([...temp])
  }

  console.log(todos);
  
  return (
    <>
    <div className="App">
     <span className="heading">
      TO DO LIST
     </span>
     <InputsField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} changeStatusToDone={changeStatusTodone} changeStatusTodo={changeStatusTodo}/>
    </div>
    </>
  )

}

export default App;
