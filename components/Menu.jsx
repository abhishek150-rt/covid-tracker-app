import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from "react-bootstrap/Button"
import Data from "./Data"
const Menu = ({ getItem }) => {
    const category = [...new Set(Data.map(e => e.category)), "all"];
    return (
        <>
            <ButtonGroup aria-label="Basic example" style={{ display: "flex", margin: "30px auto ", width: "50%" }}>
                {category.map((e,id) => {
                    return (
                        <Button variant="warning" key={id} onClick={() => getItem(e)}>{e}</Button>
                    )
                })}

            </ButtonGroup>
        </>
    )
}

export default Menu
