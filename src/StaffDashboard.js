import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function StaffDashboard({ bookList, setList }) {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {

        getUsers();

    }, []);



    let handleDelete = async (id) => {
        try {
            const confirmdata = window.confirm(`Are you sure want to delete`);
            if (confirmdata) {
                await axios.delete(`https://63a149e3e3113e5a5c514a70.mockapi.io/books/${id}`)
                getUsers()
            }
        } catch (error) {

        }
    }

    let getUsers = async () => {
        try {
            const users = await axios.get("https://63a149e3e3113e5a5c514a70.mockapi.io/books");
            setList(users.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div class="container-fluid">
                <div class="card shadow mb-4 mt-5">
                    <div class="card-header d-sm-flex align-items-center justify-content-between mb-4 ">
                        <h6 class="m-0 font-weight-bold text-dark">Welcome you..!</h6>
                        <Link to={"/"} class="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm float-center"><i
                            class="fas fa-download fa-sm text-white-50"></i> Logout</Link>
                    </div>

                    <div class="card-body">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <span><b>Books List</b></span>
                                <Link to={"/add-book"} class="d-none d-sm-inline-block btn btn-sm btn-outline-dark shadow-sm float-end"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Add new Book</Link>
                            </div>

                            <div class=" table-responsive">
                                {
                                    isLoading ? <h1>Loading...</h1> : <table class="table table-bordered" id="dataTable" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Author</th>
                                                <th>Published On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookList.map((book, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{book.id}</td>
                                                        <td>{book.title}</td>
                                                        <td>{book.author}</td>
                                                        <td>{book.published}</td>
                                                        <td>
                                                            <Link to={`/view-book/${book.id}`} className='btn btn-light btn-sm mx-1'>View</Link>
                                                            <Link to={`/edit-book/${book.id}`} className='btn btn-outline-secondary btn-sm mx-1'>Edit</Link>
                                                            <button onClick={() => handleDelete(book.id)} className='btn btn-secondary  btn-sm mx-1'>Delete</button>
                                                        </td>
                                                    </tr>)
                                            })}

                                        </tbody>
                                    </table>
                                }
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StaffDashboard