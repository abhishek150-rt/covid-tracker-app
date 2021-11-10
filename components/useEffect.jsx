import React, { useState, useEffect } from 'react'

const Comp = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        (count > 0) ? document.title = `Click ${count}` : document.title = "Click"
    },[count])
    return (
        <>
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={increment}>Click me</button>
        </>
    )
}

export default Comp
