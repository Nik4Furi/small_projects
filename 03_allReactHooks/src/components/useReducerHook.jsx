import React, { useReducer } from 'react'

const useReducerHook = () => {
    const handleReduc = (state,action)=>{
        console.log('reducing the data ...');

        switch (action.type){

            case 'add':
                return state+action.payload;
                // console.log('adding data ',state+action.payload);
            case 'subtract':
                return  state-action.payload
                // console.log('subtract data ',state-action.payload); 
        }
            
    }

    const [state,dispatch] = useReducer(handleReduc,100);

    //Function to handle add
    const handleAdd = ()=>[
       // here type is 'add' and call the function
    ]

  return (
    <>
      {/* useReducer: hook is used like handle the states, work like an 'redux-toolkit', but this is not used  in complex projects,  */}
      <div className="card">
        <button onClick={() => dispatch({type:'add',payload:5})}>Click to add</button>
        <p>Here we show the state data-- {state}</p>
        <button onClick={() => dispatch({type:'subtract',payload:5})}>Click to subtract</button>
      </div>
    </>
  )
}

export default useReducerHook
