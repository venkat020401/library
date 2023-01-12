import React from 'react'
import { Link } from 'react-router-dom'

function login() {
    return (
        <div className='login'>
            <div className='container'>
                <form className='form' >
                    <div className='row grid'>
                        <div className='col-lg-6 p-5' >
                            <h3>User Login</h3>
                            <input name="userid" type="text" className={"form-control mb-4 height40"} placeholder={"User ID"} />
                            <input name="password" type="password" className={"form-control mb-3 height40"} placeholder={"Password"} />
                            <Link to={"/user-dashboard"} className={"btn btn-dark btn-sm"}>Login</Link>

                            <Link to={"/user-register"} className={"btn btn-dark btn-sm mx-2"}>Sign up</Link>

                        </div>

                        <div className='col-lg-6 p-5 ' >
                            <h3>Staff Login</h3>
                            <input name="staffid" type="text" className={"form-control mb-4 height40"} placeholder={"Staff ID"} width="20px" />
                            <input name="password" type="password" className={"form-control mb-3 height40"} placeholder={"Password"} />
                            <Link to={"/staff-dashboard"} className={"btn btn-dark btn-sm"}>Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login
