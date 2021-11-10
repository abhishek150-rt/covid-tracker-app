import React, { useState } from 'react'
import Swal from 'sweetalert2'
const SingUpForm = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [output, setoutput] = useState([]);
    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       if (input.username!=="" && input.email!=="" && input.phone!=="" && input.password!==""){
        const newOutput = { ...input, id: new Date().getTime().toString() };
        setoutput([...output, newOutput]);
        console.log(output);
        setInput({
            username: "",
            email: "",
            phone: "",
            password: ""
        });
       }
       else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
       }
    }
    return (
        <>
            <form className="singupform" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" autoComplete="off" name="username" value={input.username || ''} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoComplete="off" name="email" value={input.email || ''} onChange={handleChange} />
                    <div id="usernameHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" autoComplete="off" name="phone" value={input.phone || ''} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" autoComplete="off" name="password" value={input.password || ''} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">Sign In</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">USERNAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">Phone</th>
                        <th scope="col">PASSWORD</th>
                    </tr>
                </thead>
                {output.map(e => {
                    const { id, username, email, phone, password } = e
                    return (
                        <tbody key={id}>
                            <tr>
                                <th scope="row">{id}</th>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{password}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    )
}
export default SingUpForm
