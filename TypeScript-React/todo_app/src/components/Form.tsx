import React, { useState } from 'react'

import { Button, Stack } from '@chakra-ui/react';

import TodoCard from "./TodoCard"
import { ITodo } from '../types/todo.types';

const Form = () => {
    
    
    const [todo, setTodo] = useState('')
    const [form, setForm] = useState<ITodo[]>([]);

    const [edit, setEdit] = useState({isEdit:false,id:''});

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //---------- Add a new todo
        if (edit.isEdit === true) {
            console.log('check edit text ', todo);

            setForm(form.map((item)=> 
                item.id === edit.id ? {...item,todo} : item
            ))
            edit.isEdit = false;
            setEdit({isEdit:false,id:''});
        }
        else {
            let id = Date.now().toString();

            let newTodo: ITodo = {
                id, todo, isDone: false
            }

            setForm([...form, newTodo]);
        }
        setTodo('');

        // console.log('checking the todo ',form,form.length);

    }

    //----------------- Function to handle events on todo 
    const handleDelete = (id: string ) => {
        let deleteTodos = form.filter((item) => item.id !== id);
        setForm(deleteTodos);

        console.log('delete todo ', id);
    }
    const handleDone = (id: string) => {
        setForm(form.map((item) => item.id === id ? { ...item, isDone: !item.isDone } : item))

        console.log('done todo ', id);
    }

    const handleEdit = (id: string ) => {
        let text = form.filter((item) => item.id === id);
        console.log('check test ', text[0].todo);
        setTodo(text[0].todo);

        setEdit({isEdit:true,id});

        console.log('delete todo ', id);
    }

    return (
        <>

            <form method="post" onSubmit={(e) => handleSubmit(e)} style={{ position: 'relative' }}>
                <Stack direction={["column", "row"]} maxW={'100%'} alignItems={"center"}  >

                    <input type="text" placeholder="Enter your todo" name='todo' id='todo' value={todo} onChange={(e) => handleOnChange(e)} style={{ margin: "4px 2px", border: "2px solid black", borderRadius: "12px", padding: "5px 7px", width: "90%" }} />
                    <Button type='submit' borderRadius={"12px"} m={["1px 0", "2px 0"]} colorScheme='blue' >Go</Button>
                </Stack>
            </form>


            {/* A component to show our cards */}
            <Stack direction={["column", "row"]} flexWrap={"wrap"} margin={"12px auto"}>

                {
                    form && form.map((item) => (
                        <TodoCard key={item.id} todo={item.todo} isDone={item.isDone} id={item.id} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone} />
                    ))

                }
                {
                    !form || form.length === 0 && "No todo did you add ,make a new now"
                }

            </Stack>
        </>
    )
}

export default Form