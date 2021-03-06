import React, { useState, useEffect } from 'react'
import Table from "react-bootstrap/Table";
import "./covid.css";
const Covid = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                const result = await fetch(`https://api.covid19api.com/summary`);
                let data = await result.json();
                data = data.Countries
                setData(data)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getData();
    }, []);
    return (
        <>
            <h3 className="text-center my-3"><u>Covid Tracker React App</u></h3>
            <Table striped bordered hover className="mt-5 covid-table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Death</th>
                        <th>New Deaths</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {Data.map((e, id) => {

                        return (
                            <tr key={id}>
                                <td>{e.Country}</td>
                                <td>{e.TotalConfirmed}</td>
                                <td>{e.NewConfirmed}</td>
                                <td>{e.TotalDeaths}</td>
                                <td>{e.NewDeaths}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </>
    )
}

export default Covid
