import React, { useRef } from 'react'

const UseRefHook = () => {
    const card = useRef(null);

    const handleClick = ()=>{
        card.current.style.background = 'red';
    }
    

  return (
    <>
      {/* useRef: hook is used when want to access a current data as help of reference,like when click on card, then modal open etc ...  */}
      {/* that was work like getElementById, class name or query selector in react  */}

      <div className="card" ref={card} onClick={()=> handleClick()} style={{cursor:'pointer',border:'2px solid white'}}>
        <p>Click on card, to change background</p>
      </div>

    </>
  )
}

export default UseRefHook
