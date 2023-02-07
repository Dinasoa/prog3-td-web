import React from "react"
import { Todo } from "../model";
import '../style/style.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    changeStatusToDone: (todo:Todo) => void;
    changeStatusTodo: (todo:Todo) => void;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos , changeStatusToDone , changeStatusTodo}) => {
 
    return (
        <>
            <div className="todoList">
                <div className="todos" data-testid="to-do">
                <span className="title" >TO DO</span>
                    {todos.map((todo) =>  todo.isDone == false && (
                        <>
                        <li key={todo.id} data-testid="todo">
                            <input type="checkbox" data-testid = "input-checkbox" onChange={() => changeStatusToDone(todo)}/>
                            {todo.todo}
                        </li>                          
                        </>
                    ))}
                </div>
                <div className="todos">
                <span className="title">DONE</span>
                    {todos.map((todo ,index) => todo.isDone && (
                        <>
                        <li key={todo.id || index} data-testid='done'>
                            <input data-testid='input-done-checkbox' type="checkbox" onChange={() => changeStatusTodo(todo)} checked={true} />
                            {todo.todo}
                        </li>                          
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}