import React, { useEffect, useState } from 'react'

import { Button, Stack } from '@chakra-ui/react';

import TodoCard from "./TodoCard"
import { ITodo } from '../types/todo.types';

const Form = () => {
    const [todo,setTodo] = useState('')
    const [form, setForm] = useState<ITodo[]>([]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
        //---------- Add a new todo
        let id = Date.now();

        let newTodo:ITodo = {
            id,todo,isDone:false
        }
        
        setForm([...form,newTodo]);

        setTodo('');        
        // console.log('checking the todo ',form,form.length);
        
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
                form && form.map((item)=>(
                    <TodoCard key={item.id} todo={item.todo}  isDone={item.isDone} id={item.id} />
                ))
                
            }
            {
                !form || form.length===0 && "No todo did you add ,make a new now"
            }
                
            </Stack>
        </>
    )
}

export default Form