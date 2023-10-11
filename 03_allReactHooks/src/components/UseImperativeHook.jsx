import React, { forwardRef,useImperativeHandle  } from 'react'

const UseImperativeHook = forwardRef((props,ref) => {
    const count = 0;

    const handleAdd = () => (count +1);

    useImperativeHandle(ref, ()=> ({handleAdd}));
    
  return (
    <>
      {/* useImperative: as default we know, can transfer the function form parent-> child, but help of 'useImperative' hook ,can tranfer the vars and functions from child-> parent  */}
<div className="card">
    <p>{count}</p>
</div>
      
    </>
  )
}
)

export default UseImperativeHook
