import React from "react"
import { Todo } from "../model";
import '../style/style.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    changeStatus: (todo:Todo) => void;
}


export const TodoList: React.FC<Props> = ({ todos, setTodos , changeStatus}) => {
 
    return (
        <>
            <div className="todoList">
                <div className="todos">
                <span>TO DO</span>
                    {todos.map((todo) => todo.isDone == false && (
                        <>
                        <li>
                            <input type="checkbox" onChange={() => changeStatus(todo)}/>        
                            {todo.todo}
                        </li>                          
                        </>
                    ))}
                </div>
                <div className="todos">
                <span>DONE</span>
                    {todos.map((todo) => todo.isDone && (
                        <>
                        <li>
                            <input type="checkbox" />        
                            {todo.todo}
                        </li>                          
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}