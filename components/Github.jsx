import React from 'react'
import { useState, useEffect } from 'react'
import Loading from "./Loading"
import Users from "./Users"
const Github = () => {
    const [users, setUsers] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        async function getData() {
            try {
                const result = await fetch(`https://api.github.com/users`);
                setUsers(await result.json());
                
                setLoading(false)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getData();
    }, []);

    if(loading){
        return <Loading/>
    }
    else{
        return <Users users={users}/>
    }

}
export default Github
