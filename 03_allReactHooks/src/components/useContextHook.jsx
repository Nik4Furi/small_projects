import React from 'react'

const useContextHook = () => {
  return (
    <>
      {/* useContext: hook to use in creating a project, where a state have access of all over app, then we can create global variables, which is access in app level not child or parent level, is help to reduc the props passing  */}
      {/* I know how this is implement, like i will steps to implement  */}
      {/*1. Create context help of 'createContext' from react 
      2. Create state file where we declare or create variables or functions respectievly, and Here we import context file, and {props.children} is used 
      3. And in index.js, import state file, and now can use the variables globally */}
    </>
  )
}

export default useContextHook
