import React, { useReducer } from 'react'
const initialValue = {};
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state = {
                color: "red",
                textAlign: "center"
            }

        case "decrement":
            return state = {
                color: "blue",
                textAlign: "right"
            }

        default:
            return state;
    }
}
const UseReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div className="container">
            <h5 style={count}>hello</h5>
            <button className="btn btn-success mx-3" onClick={() => dispatch("increment")}>Increment</button>
            <button className="btn btn-danger mx-3" onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    )
}

export default UseReducerHook
