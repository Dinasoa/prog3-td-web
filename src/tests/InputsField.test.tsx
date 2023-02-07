import {fireEvent, render, screen} from "@testing-library/react";
import { InputsField } from "../components/InputsField";
import React, {SetStateAction} from "react";
import renderer from 'react-test-renderer';
import userEvent from "@testing-library/user-event";

it('Input field should match snapshot' , () => {
    const output = renderer.create(<InputsField todo={"todo"} setTodo={() => {}} handleAdd={() => {}}></InputsField>)
    expect(output).toMatchSnapshot() ;
})

it('Entering text ok' , () => {
    let todo: string = 'to do';
    const { getByPlaceholderText } = render(<InputsField todo={todo} setTodo={jest.fn()} handleAdd={() => {}} />);
    const input = getByPlaceholderText('Enter a task');
    userEvent.type(input , 'to do');
    expect(input).toHaveValue('to do')
})

it('Check if the function handleAdd has been called' , () => {
    let item = "todo" ;
    const setTodo = jest.fn();
    const handleAdd = jest.fn() ;
    const app=render(<InputsField todo={item} setTodo={setTodo} handleAdd={handleAdd}/>) ;
    const button = app.getByTestId("submit-button")
    fireEvent.submit(button) ;
    expect(handleAdd).toHaveBeenCalled()
})

it('Entering text in input should update state', () => {
    let todo: string = '';
    const setTodo : React.Dispatch<SetStateAction<string>> = (newTodo: any) => {
        todo = newTodo;
    };
    const { getByPlaceholderText } = render(<InputsField todo={todo} setTodo={setTodo} handleAdd={() => {}} />);
    const input = getByPlaceholderText('Enter a task');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    expect(todo).toBe('Test Todo');
})

it('Submitting form should call the function handleAdd', () => {
    const handleAdd = jest.fn();
    const { getByTestId } = render(<InputsField todo="" setTodo={() => {}} handleAdd={handleAdd} />);
    const submitButton = getByTestId('submit-button');
    fireEvent.submit(submitButton);
    expect(handleAdd).toHaveBeenCalled();
});

it('Input field and submit button should be displayed', () => {
    const { getByPlaceholderText, getByTestId } = render(<InputsField todo="" setTodo={() => {}} handleAdd={() => {}} />);
    const input = getByPlaceholderText('Enter a task');
    const submitButton = getByTestId('submit-button');
    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
