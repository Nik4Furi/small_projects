import * as React from "react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Form from "./components/Form"

export const App = () => (


    <>
      <div style={{width:"80%",margin:"12px auto"}}  >

        <h2 >Welcome in <span >todo app</span></h2>
        <p >This todo app, creating with the help of th <span style={{color:'salmon',fontWeight:"bold",fontFamily:'Arial, Helvetica, sans-serif'}}>Chakra UI, Typescript & React</span></p>

        <p>If we consider its features like <span style={{color:'salmon',fontWeight:"bold",fontFamily:'Arial, Helvetica, sans-serif'}}>Drag and Drop to your task </span> and switch task completed to non-completed or non-completed, also I am using <span style={{color:'salmon',fontWeight:"bold",fontFamily:'Arial, Helvetica, sans-serif'}}>useReducer hook to dispatching the function</span> of the app, So please after use give me the feedback, how would you like!😍</p>

        {/* Form to submitting the todo data  */}
        <Form />         

      </div>
    </>
  )
