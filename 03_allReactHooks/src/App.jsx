import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './components/UseStateHook'
import UseEffectHook from './components/UseEffectHook'
import UseMemoHook from './components/UseMemoHook'
import UseCallbackHook from './components/UseCallbackHook'
import UseRefHook from './components/UseRefHook'
import UseContextHook from './components/useContextHook'
import UseReducerHook from './components/useReducerHook'
import UseImperativeHook from './components/UseImperativeHook'
import UseLayoutHook from './components/UseLayoutHook'
import useFetchApi from './components/BuildHook/01_FetchAPI'

function App() {
  // const [count, setCount] = useState(0)
  // const count = 0;
  // const ref = useRef();

  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const {data,error,loading}  = useFetchApi(url);

  console.log(data);

  if(error) return console.log('error ',error);
  if(loading) return <h1>loading ....</h1>

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>All React Hooks 🪝</h1>

      {/* <div className="card">
        <button onClick={()=> ref.current.handleAdd()}>
          count is {count}
        </button>
        <p> */}
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
        {/* </p>
      </div> */}

      {/* ------------------ Make to try changes of the all react hooks  */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseImperativeHook ref={ref} /> */}
      {/* <UseLayoutHook /> */}


      <div className="card"> title is ---{">  "}
      {data.title}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
