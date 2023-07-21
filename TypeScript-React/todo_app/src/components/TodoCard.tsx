import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

import { MdDelete,MdDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { ITodo } from '../types/todo.types'



const TodoCard: React.FC<ITodo> = ({ id, todo, isDone }: ITodo) => {
    return (
        <>
            <Box cursor={"pointer"} background={"blue.50"} border={"1px solid "} borderRadius={"12px"} p={'5px 7px'}>
                <HStack alignItems={'center'} justifyContent={"space-evenly"} >
                    <p> {todo} </p>

                    <span ><MdDelete /></span>
                    <span ><AiFillEdit /></span>
                    <span ><MdDone /></span>


                </HStack>
            </Box>
        </>
    )
}

export default TodoCard
