import React from 'react'
import {hooks} from "../App"
import { useContext } from 'react/cjs/react.development'
const UseContextHook2 = () => {
    const props=useContext(hooks)
    return (
        <>
            <h3>Types of Hooks:-</h3>
    {props.map((e,i)=> <li key={i}>{e}</li>)}
        </>
    )
}

export default UseContextHook2
