import React from 'react'
import { Link } from 'react-router-dom'

function RegisterUser() {
    return (
        <div className='login'>
            <div className='container'>
                <form className='form' >
                    <div className='row grid'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4' >
                            <h3>Register User</h3>
                            <input name="Name" type="text" className={"form-control mb-4 height40"} placeholder={"Full Name"} />
                            <input name="Email" type="email" className={"form-control mb-3 height40"} placeholder={"Email"} />
                            <input name="Phone" type="number" className={"form-control mb-3 height40"} placeholder={"Contact Number"} />
                            <input name="Userid" type="text" className={"form-control mb-3 height40"} placeholder={"Create User ID"} />
                            <input name="CreatePassword" type="password" className={"form-control mb-3 height40"} placeholder={"Create Password"} />
                            <input name="ConformPassword" type="password" className={"form-control mb-3 height40"} placeholder={"Confirm Password"} />
                            <Link to={"/user-dashboard"} className={"btn btn-dark btn-sm"}> Register</Link>
                            <hr />
                            <span className='mt-1'>If alread have an account Click </span>
                            <Link to={"/"} className={"btn btn-outline-dark btn-sm"}> Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterUser