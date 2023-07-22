import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

import { MdDelete,MdDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { ITodo } from '../types/todo.types'

interface Props {
    id : string ;
    todo:string;
    isDone:Boolean;
    handleDelete : (id:string ) => void;
    handleDone : (id:string ) => void;
    handleEdit : (id:string ) => void;
}


const TodoCard: React.FC<Props> = ({id, todo, isDone,handleDelete,handleEdit ,handleDone}: Props) => {
   
    return (
        <>
            <Box cursor={"pointer"} background={`${isDone == true ? 'red.100' :'blue.50'}  `} border={"1px solid "} borderRadius={"12px"} p={'7px 10px'}>
                <HStack alignItems={'center'} justifyContent={"space-evenly"} >
                    <div style={{fontSize:'1rem'}}> {
                        isDone === true 
                        ? <s>{todo}</s>
                        : <p>{todo}</p>
                        } </div>

                    <span style={{fontSize:'1rem'}} ><MdDelete onClick={()=>handleDelete(id)} /></span>
                    <span style={{fontSize:'1rem'}} ><AiFillEdit onClick={()=>handleEdit(id)} /></span>
                    <span style={{fontSize:'1rem'}} ><MdDone onClick={()=>handleDone(id)} /></span>


                </HStack>
            </Box>
        </>
    )
}

export default TodoCard
