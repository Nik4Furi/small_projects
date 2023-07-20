import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Form from "./components/Form"

export const App = () => (
  
    <>
      <Container m={"19px auto"} >

        <h2 style={{textAlign:"left"}} >Welcome in <span >todo app</span></h2>
        <p style={{textAlign:"left"}} >Make your todo list responsive in manner of the drag and drop</p>

        {/* Form to submitting the todo data  */}
        <Form />

      </Container>
    </>
)
