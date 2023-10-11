import React, { useLayoutEffect } from 'react'

const UseLayoutHook = () => {
    
    useLayoutEffect(()=> console.log('we are calling before...'),[]);
    console.log('render after ?....');

  return (
    <>
      {/* useLayout: hook is work like useEffect, means that calling function or api, when component render, but this will call function/api, before rendering the component,  */}
    </>
  )
}

export default UseLayoutHook
