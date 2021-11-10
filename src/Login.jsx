import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
    username: yup.string().max(15, 'Must be 15 characters or less').required('Username is required field'),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter 10 digit phone number").required("Phone is required"),
    password: yup.string().required('please enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, `Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and One Special Case Character`),
});

function Login() {
    const [input, setInput] = useState([
        {
            username: "",
            email: "",
            phone: "",
            password: ""
        }
    ])
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data, e) => {
        console.log(data);
        e.target.reset();
        setInput([
            ...input,
            {
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password
            }
        ])


    };
    const [type, setType] = useState("password");
    const togglePassword = () => {
        (type === "password") ? setType("text") : setType("password")
    }
    return (
        <div classname="container p-5">
            <div className="row p-5">
                <div className="col-sm-6 p-5">
                    <form className="singupform p-5" onSubmit={handleSubmit(submitForm)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" autoComplete="off"  {...register('username')} />
                            <span className="text-danger"> {errors.username?.message} </span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoComplete="off" {...register('email')} />
                            <span className="text-danger"> {errors.email?.message} </span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" autoComplete="off"  {...register('phone')} />
                            <span className="text-danger"> {errors.phone?.message} </span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type={type} className="form-control" id="password" autoComplete="off" {...register('password')} />
                            <span className="text-danger"> {errors.password?.message} </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={togglePassword} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Show Password
                             </label>
                        </div>
                        <button type="submit" className="btn btn-primary d-block w-100">Sign In</button>
                    </form>
                </div>
                <div className="col-sm-6 p-5">
                    <table className="table table-dark table-striped p-5">
                        <thead>
                            <tr>
                                <th scope="col">USERNAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">Phone</th>
                                <th scope="col">PASSWORD</th>
                            </tr>
                        </thead>
                        {input.map(e => {
                            return (
                                <>
                                    <tbody>
                                        <tr>

                                            <td>{e.username}</td>
                                            <td>{e.email}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.password}</td>
                                        </tr>
                                    </tbody>

                                </>
                            )
                        })}
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Login;