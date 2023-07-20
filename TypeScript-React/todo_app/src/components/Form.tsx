import { Box, Button, Input } from '@chakra-ui/react';
import React, {useState} from 'react'

const Form = () => {
    const [form,setForm] = useState();

    // const handleOnChange = (e:) => setForm(e.target.value);

    const handleSubmit = ()=>{
        // e.preventDefault();
        console.log('form submit ',form);
    }
  return (
    <>
        <Box >

            <form  method="post">
                <Input placeholder="Enter your task" value={form} onInput={(e)=>setForm)}  isRequired />

                <Box >
                    <Button onClick={()=>handleSubmit()} children="Add todo" colorScheme='linkedin'  />
                </Box>
            </form>

        </Box>
    </>
    )
}

export default Form