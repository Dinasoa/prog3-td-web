import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {TodoList} from "../components/TodoList";
import {Todo} from "../model";
import renderer from "react-test-renderer";

it('Check if TodoList match the snapshot' , () => {
    const todos:Todo[] = [{id: 1 , todo: 'code', isDone:false}]
    const changeStatusTodo = jest.fn() ;
    const output = renderer.create(<TodoList todos={todos} setTodos={() => {}} changeStatusToDone={() => {}} changeStatusTodo={changeStatusTodo}/>) ;
    expect(output).toMatchSnapshot() ;
})

it('Check if the function changeStatusTodone should update the state to done' , () => {
   const changeStatus = jest.fn() ;
   const listOfTodo:Todo[] = [{id:1 , todo: 'this' , isDone:false}]
    const {getByTestId} = render(<TodoList todos={listOfTodo}
                                            setTodos={() => {
                                            }}
                                            changeStatusToDone={changeStatus}
                                            changeStatusTodo={() => {
                                            }}/> ) ;
   fireEvent.click(getByTestId('input-checkbox')) ;
   expect(changeStatus).toHaveBeenCalled() ;
   expect(listOfTodo.map((todo) => todo.isDone)).toBeTruthy() ;
})

it('Check if the function changeStatusTodo should update the state to to do ' , () => {
    const changeStatusToDone = jest.fn() ;
    const changeStatusTodo = jest.fn() ;
    const listOfTodo:Todo[] = [{id:1 , todo: 'this' , isDone:true}]
    const {getByTestId} = render(<TodoList todos={listOfTodo}
                                           setTodos={() => {
                                           }}
                                           changeStatusToDone={changeStatusToDone}
                                           changeStatusTodo={changeStatusTodo}/>) ;
    fireEvent.click(getByTestId('input-done-checkbox')) ;
    expect(changeStatusTodo).toHaveBeenCalled() ;
    expect(listOfTodo.map((todo) => todo.isDone == false)).toBeTruthy() ;
})

it('Check that todo task are displayed in the screen' , () => {
    const changeStatusToDone = jest.fn() ;
    const changeStatusTodo = jest.fn() ;
    const listOfTodo:Todo[] = [{id:1 , todo: 'this' , isDone:false}]
    const {getByTestId} = render(<TodoList todos={listOfTodo} setTodos={() => {}}
                                           changeStatusToDone={changeStatusToDone}
                                           changeStatusTodo={changeStatusTodo} />) ;
    const todo = getByTestId('todo') ;
    expect(todo).toBeInTheDocument() ;
})

it('Check that done task are displayed in the screen' , () => {
    const changeStatusToDone = jest.fn();
    const changeStatusTodo = jest.fn() ;
    const listOfDone:Todo[] = [{id:1 , todo: 'eat' , isDone:true}]
    const {getByTestId} = render(<TodoList todos={listOfDone} setTodos={() => {}} changeStatusToDone={changeStatusToDone}
                                           changeStatusTodo={changeStatusTodo}/>)
    const done = getByTestId('done') ;
    expect(done).toBeInTheDocument();
})

