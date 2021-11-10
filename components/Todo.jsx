import React, { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form"
import { MdDeleteForever } from 'react-icons/md';
const Todo = () => {
    const [input, setinput] = useState('');
    const [output, setoutput] = useState(getData());

    //Add item into list
    const addItem = (e) => {
        if (input !== "") {
            const allInput = { id: new Date().getTime().toString(), List: input }
            setoutput([...output, allInput]);
            setinput('');
        }
        else {
            alert("please enter an item");
        }
        e.preventDefault();
    }


    // storing data in local storage
    useEffect(() => {

        localStorage.setItem("list", JSON.stringify(output));
    }, [output]);

    //getting data back from local storage
    function getData() {
        let items = localStorage.getItem("list");
        if (items) {
            return JSON.parse(localStorage.getItem("list"))
        }
        else {
            return [];
        }
    }

    //delete list
    const deleteItem = (index) => {
        const updatedInput = output.filter((elem) => {
            return index !== elem.id
        });
        setoutput(updatedInput);
    }
    //delete all list
    const removeAll = () => {
        setoutput([])
    }
    return (

        <>
            <h3>Add Item to your Todo List</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Add Items" onChange={(e) => setinput(e.target.value)} value={input} />
                    <button className="btn btn-primary w-100 my-3" onClick={addItem}>ADD</button>
                </Form.Group>
            </Form>
            {output.map((e) => {
                return (
                    <div key={e.id} className="show">
                        <span className="fs-6 mx-5" >{e.List}</span>
                        <MdDeleteForever id="del" style={{ fontSize: "25px" }} onClick={() => { deleteItem(e.id) }}/>
                        <br />
                    </div>
                )
            })}

            <button className="btn btn-success my-5 w-100" onClick={removeAll}><span>Remove All</span></button>
        </>
    )
}

export default Todo
