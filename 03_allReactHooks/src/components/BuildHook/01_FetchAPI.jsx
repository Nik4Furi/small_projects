import React, { useDebugValue, useEffect, useState } from 'react'

// Now we are creating our own hook, this hook is call 'useFetchApi', is will used to calling the apis 
const useFetchApi = (url = '', options = null) => {

    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(() => {
        setLoading(true);

        fetch(url, options).
            then(res => res.json()).
            then(data => {
                setData(data);
                setError(null)
            }).
            catch(error => {
                setError(error);
                setData(null)
            }).
            finally(() => setLoading(false));

            
        }, [url,options])

        useDebugValue('Debugging my fetch api hook ');
        
        return {data,error,loading};
}

// useDebugValue('Debugging my fetch api hook ',data,error,loading);



export default useFetchApi
