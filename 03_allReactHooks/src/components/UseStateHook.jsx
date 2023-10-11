import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  //---------- Function to handle the count
  const handleCount = () => {
    //State work asynchronously
    // setCount(count + 1);

    //State working syncrhonously, that will used , when want to update data in sequnces way
    setCount((prev) => prev+1);

    console.log('count ', count);
  }

  return (
    <>
      {/* useState: hook work to creating the state in component levels and is imutable, means that can't change at run time  */}
      {/* I already know how this is work, so didn't need to implement this 👍 */}
      <div className="card">
        <button onClick={() => handleCount()}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default UseStateHook
