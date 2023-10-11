import React, { useCallback, useState } from 'react'

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    //---------- Function to handle the count
    const handleCount = () => {
        //State work asynchronously
        // setCount(count + 1);

        //State working syncrhonously, that will used , when want to update data in sequnces way
        setCount((prev) => prev + 1);

        console.log('count ', count);
    }

    const handleMultiple = (num) => num * 2;

    const updateCount = useCallback(() => {
        //any function you can write which is run when count is update
    }
    , [count]);

    console.log('update Count ', updateCount)


    return (
        <>
            {/* useCallback: hook is like an useMemo hook, but it will return the function, instead of return a value */}
            <div className="card">
                <button onClick={() => handleCount()}>
                    count is {count}
                </button>
            </div>

            <div className="card">
                <button >
                    count multiplication {updateCount}
                </button>
            </div>

        </>
    )
}

export default UseCallbackHook
