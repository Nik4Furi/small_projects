import React, { useMemo,useState } from 'react'

const UseMemoHook = () => {

    const [count, setCount] = useState(0);

    //---------- Function to handle the count
    const handleCount = () => {
        //State work asynchronously
        // setCount(count + 1);

        //State working syncrhonously, that will used , when want to update data in sequnces way
        setCount((prev) => prev + 1);

        console.log('count ', count);
    }

    const handleMultiple = (num) => num*2;

    const updateCount = useMemo(() => {return handleMultiple(count)}, [count]);

    console.log('update Count ',updateCount)

    return (
        <>
            {/* useMemo: hook in react, is call a function, when any memory changes is occur or memoize  */}
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

export default UseMemoHook
